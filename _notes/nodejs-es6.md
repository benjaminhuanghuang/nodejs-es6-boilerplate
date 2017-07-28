There are couple of choices to use ES6 in node.js programming

Use the Node.js Harmony flag to enable the new ES6 features in the language. 
    node --harmony app.js 

Run io.js which includes all stable ES6 features by default.

Write your code using ES6 and transpile it to ES5 using Babel.
    "watch": "babel -w src/ -d dist/",
    "build": "babel src/ -d dist/",
    "serve": "babel -w src/ -d dist/ | nodemon --watch dist"

Run application using babel-node
    babel-node --presets es2015 app.js

Using babel/register
    It hooks into all require calls to transpile your app at runtime, and lets you start your app with regular Node.