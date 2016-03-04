# Creating your first angular-meteor app

To create a Meteor app, open your terminal and type:

meteor create simple-todos-angular

# Defining views with templates

To use Angular in our app, we first need to remove the default UI package of Meteor, called Blaze.

We also need to remove Meteor's default ECMAScript2015 package named ecmascript because Angular-Meteor uses a package named angular-babel in order to get both ECMAScript2015 and AngularJS DI annotations.

## Remove blaze-html-templates and ecmascript by running:

meteor remove blaze-html-templates
meteor remove ecmascript

## Add the angular-meteor package by typing the following command into the command line:

meteor add angular

The angular-meteor package parses all of the html files in your app folder and puts them in Angular's template cache with the id of their full path.

So, for example, when a file is named my-angular-template.html is placed in the client folder, it will be available for ng-include or ui-router with the name client/my-angular-template.html.

## HTML files in Meteor define templates

Meteor parses all of the regular .HTML files in your app folder and identifies three top-level tags: <head>, <body>, and <template>.

Everything inside any <head> tags is added to the head section of the HTML sent to the client, and everything inside <body> tags is added to the body section, just like in a regular HTML file.

The angular-meteor package parses all of the html files in your app folder and puts them in Angular's template cache with the id of their full path.

So, for example, when a file is named my-angular-template.html is placed in the client folder, it will be available for ng-include or ui-router with the name client/my-angular-template.html.

## Adding logic and data to templates

All of the code in your html files is compiled with Angular. Angular binds the data into our templates just like any other Angular app.

# Storing tasks in a collection

We are using the $meteor service to bind our Tasks collection to our $scope.tasks variable. Now every change that will happen to each of those objects will be synced in real time across our stack.

When you make these changes to the code, you'll notice that the tasks that used to be in the todo list have disappeared. That's because our database is currently empty — we need to insert some tasks!

# Adding user accounts

meteor add accounts-password dotansimha:accounts-ui-angular

accounts-password is a package that includes all the logic for password based authentication.

dotansimha:accounts-ui-angular includes the <login-buttons> directive that contains all the HTML and CSS we need for user authentication forms.

