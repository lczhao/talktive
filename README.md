##Talktive
This is a forum template that acquire several key idea of modern web application design. <br/>
This template is built in AnuglarJS and styled using bootstrap.<br/>

----

###Installation
You have to install node.js in order to run this app.

First, download node.js from http://nodejs.org/<br/>

Then, install the node package express in the repository folder
    
    $ cd /usr/Source/Repo/talktive
    $ npm install express

Then, start up the server by:

    $ node app.js

Finally open your browser, and visit http://localhost:3000/

This web site is built and optimized under chrome

-----

###Key Ideas
####Google Material Design
In this template, the content is break up into pieces using bordered div with box-shadow <br/>
This template fully utilized the power of HTML5 to produce a user friendly page <br/>
Checkout more on material design at: http://www.google.com/design/spec/material-design/introduction.html <br/>

####Angular's MVC model
Using the $routeProvider in angularJS, this web site is broken up into big MVC modules that can be cohesively worked by indivisual developers<br/>
Under the app/ folder, you can see all the different modules<br/>

####Infinite Loading
Using Angular and jQuery, I am able to reproduce the infinite loading you see in typical modern forum (Facebook, youtube ..) <br/>
The idea is to have user scroll down forever :) .<br/>

####Directivelization
I'm not even sure if this is a word....<br/>
But, the components in this template are break up into big modules, and inside those modules, we have directives from AngularJS <br/>
This template is to showcase how we can use directives to achieve things like managing DOM objects and manipulate them using the principle in AngularJS (without querying using IDs).<br/>

