# Creating first app

meteor create simple-todos  # create todos application
cd simple-todos             
meteor                      # run application

# TEMPLATES: Defining views with templates

## HTML files in Meteor define templates

Meteor parses all of the HTML files in your app folder and identifies three top-level tags: <head>, <body>, and <template>.

Everything inside any <head> tags is added to the head section of the HTML sent to the client, and everything inside <body> tags is added to the body section, just like in a regular HTML file.

Everything inside <template> tags is compiled into Meteor templates, which can be included inside HTML with {{> templateName}} or referenced in your JavaScript with Template.templateName.

## Adding logic and data to templates

All of the code in your HTML files is compiled with Meteor's Spacebars compiler. Spacebars uses statements surrounded by double curly braces such as {{#each}} and {{#if}} to let you add logic and data to your views.

You can pass data into templates from your JavaScript code by defining helpers. In the code above, we defined a helper called tasks on Template.body that returns an array. Inside the body tag of the HTML, we can use {{#each tasks}} to iterate over the array and insert a task template for each value. Inside the #each block, we can display the text property of each array item using {{text}}.

## Adding CSS

# Collection: Storing tasks in a collection

Collections are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be accessed from both the server and the client, making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a view component backed by a collection will automatically display the most up-to-date data.

Creating a new collection is as easy as calling MyCollection = new Mongo.Collection("my-collection"); in your JavaScript. On the server, this sets up a MongoDB collection called my-collection; on the client, this creates a cache connected to the server collection. We'll learn more about the client/server divide in step 12, but for now we can write our code with the assumption that the entire database is present on the client.

## Inserting tasks from the server-side database console

Open a new command prompt while current command prompt is running application.

meteor mongo

### Add records to the dabase table "tasks".

db.tasks.insert({ text: "Hello world!", createdAt: new Date() });

# Forms and Events

## Attaching events to templates

Event listeners are added to templates in much the same way as helpers are: by calling Template.templateName.events(...) with a dictionary. The keys describe the event to listen for, and the values are event handlers that are called when the event happens.

In our case above, we are listening to the submit event on any element that matches the CSS selector .new-task. When this event is triggered by the user pressing enter inside the input field, our event handler function is called.

The event handler gets an argument called event that has some information about the event that was triggered. In this case event.target is our form element, and we can get the value of our input with event.target.text.value. You can see all of the other properties of the event object by adding a console.log(event) and inspecting the object in your browser console.

## Inserting into collection

Inside the event handler, we are adding a task to the tasks collection by calling Tasks.insert(). We can assign any properties to the task object, such as the time created, since we don't ever have to define a schema for the collection.

Being able to insert anything into the database from the client isn't very secure, but it's okay for now. In step 10 we'll learn how we can make our app secure and restrict how data is inserted into the database.

# Sorting our tasks

return Tasks.find({}, {sort: {createdAt: -1}});

# Checking off and deleting tasks

## Getting data in event handlers

Inside the event handlers, this refers to an individual task object. In a collection, every inserted document has a unique _id field that can be used to refer to that specific document. We can get the _id of the current task with this._id. Once we have the _id, we can use update and remove to modify the relevant task.

## Update

The update function on a collection takes two arguments. The first is a selector that identifies a subset of the collection, and the second is an update parameter that specifies what should be done to the matched objects.

In this case, the selector is just the _id of the relevant task. The update parameter uses $set to toggle the checked field, which will represent whether the task has been completed.

## Remove

The remove function takes one argument, a selector that determines which item to remove from the collection.
Using object properties or helpers to add/remove classes

# Deploying your app

Simply go to your app directory, and type:

meteor deploy my_app_name.meteor.com

# Running your app on Android or iOS

Currently, Meteor on Windows does not support mobile builds. If you are using Meteor on Windows, you should skip this step.

# Storing temporary UI state in Session

In this step, we'll add a client-side data filtering feature to our app, so that users can check a box to only see incomplete tasks. We're going to learn how to use Session to store temporary reactive state on the client.

## Session is a reactive data store for the client

Until now, we have stored all of our state in collections, and the view updated automatically when we modified the data inside these collections. This is because Mongo.Collection is recognized by Meteor as a reactive data source, meaning Meteor knows when the data inside has changed. Session is the same way, but is not synced with the server like collections are. This makes Session a convenient place to store temporary UI state like the checkbox above. Just like with collections, we don't have to write any extra code for the template to update when the Session variable changes — just calling Session.get(...) inside the helper is enough.

# Adding user accounts

Meteor comes with an accounts system and a drop-in login user interface that lets you add multi-user functionality to your app in minutes.

To enable the accounts system and UI, we need to add the relevant packages. In your app directory, run the following command:

meteor add accounts-ui accounts-password

## Automatic accounts UI

If our app has the accounts-ui package, all we have to do to add a login dropdown is include the loginButtons template with {{> loginButtons}}. This dropdown detects which login methods have been added to the app and displays the appropriate controls. In our case, the only enabled login method is accounts-password, so the dropdown displays a password field. If you are adventurous, you can add the accounts-facebook package to enable Facebook login in your app - the Facebook button will automatically appear in the dropdown.

## Getting information about the logged-in user

In your HTML, you can use the built-in {{currentUser}} helper to check if a user is logged in and get information about them. For example, {{currentUser.username}} will display the logged in user's username.

In your JavaScript code, you can use Meteor.userId() to get the current user's _id, or Meteor.user() to get the whole user document.

# Security with methods

Before this step, any user of the app could edit any part of the database. This might be okay for very small internal apps or demos, but any real application needs to control permissions for its data. In Meteor, the best way to do this is by declaring methods. Instead of the client code directly calling insert, update, and remove, it will instead call methods that will check if the user is authorized to complete the action and then make any changes to the database on the client's behalf.

## Removing insecure

Every newly created Meteor project has the insecure package added by default. This is the package that allows us to edit the database from the client. It's useful when prototyping, but now we are taking off the training wheels. To remove this package, go to your app directory and run:

meteor remove insecure

If you try to use the app after removing this package, you will notice that none of the inputs or buttons work anymore. This is because all client-side database permissions have been revoked. Now we need to rewrite some parts of our app to use methods.

## Defining methods

First, we need to define some methods. We need one method for each database operation we want to perform on the client. Methods should be defined in code that is executed on the client and the server - we will discuss this a bit later in the section titled Optimistic UI.

## Optimistic UI

So why do we want to define our methods on the client and on the server? We do this to enable a feature we call optimistic UI.

When you call a method on the client using Meteor.call, two things happen in parallel:

    The client sends a request to the server to run the method in a secure environment, just like an AJAX request would work
    A simulation of the method runs directly on the client to attempt to predict the outcome of the server call using the available information

What this means is that a newly created task actually appears on the screen before the result comes back from the server.

If the result from the server comes back and is consistent with the simulation on the client, everything remains as is. If the result on the server is different from the result of the simulation on the client, the UI is patched to reflect the actual state of the server.

With Meteor methods and optimistic UI, you get the best of both worlds the security of server code and no round-trip delay.




-----------------------------------------------------------------------------
Reference: https://www.meteor.com/