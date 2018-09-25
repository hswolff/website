---
title: Smarter Express Routing
slug: smarter-express-routing
date: 2014-01-12T04:01:13.907Z
updated: 2014-01-12T21:12:01.166Z
tags:
- code
- tip
---

In a large [ExpressJS](http://expressjs.com/) application it is not optimal to define all your routes and handlers in the same file.

For the sake of code clarity and cleanliness  Express route handlers are often placed in their own file.  Those files are then included in the file that is bootstraps your application.

What you usually ends up with are two files, `user.js` and `app.js`.

**user.js**
```
module.exports = function(req, res) {
  // Do the cha cha
  req.json({'hello': req.params.user});
};
```

**app.js**
```
var express = require('express');
var app = express();

var user = require('./user');

app.get('/user/:user', user);
```

Neither the route path or the route handler have any knowledge of each other, when they are both strongly inter-related.  This increases the fragility of your application as this association is defined in two files.

Say down the line the `user.js` route handler changes, making it better fit by a new path.  To make that update would require modifying two files.  This association between the route handler and the route path should be adjacent to each other.

Also, let's say you want to later reference that route handler's path.  With this configuration there is no way to do that.

### Smarter route definitions

Let's improve this situation by moving the route path to be with the route handler.

**user.js**
```
module.exports.get = [];

exports.get.push(['/user/:user', function (req, res) {
  // Do the cha cha
  req.json({'hello': req.params.user});
}]);
```

**app.js**
```
var express = require('express');
var app = express();

var user = require('./user');

user.get.map(function(route) {
  app.get.apply(app, route);
});
```

Using a little JavaScript magic (`.apply`) we're able to dynamically apply every route path and route handler defined in `user.js`.

This can scale as much as you want.  You can add as many routes to the `get` array as you'd like, including other middleware functions, as everything in that array is passed to `app.get` through the magic of `.apply`.  You can and should also do the same for your `post`, `put`, and `delete` routes.

This should make your Express application a little more robust, and much prettier.
