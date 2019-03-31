## There are couple of choices to use ES6 in node.js programming

- Run application using babel-node [best one]
    You get babel-node by installing babel-cli
    babel-node app.js

- Use the Node.js Harmony flag to enable the new ES6 features in the language. 
    node --harmony app.js 

- Run io.js which includes all stable ES6 features by default.

- Write your code using ES6 and transpile it to ES5 using Babel.
```
    "watch": "babel -w src/ -d dist/",
    "build": "babel src/ -d dist/",
    "serve": "babel -w src/ -d dist/ | nodemon --watch dist"

    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js"
```

-Using babel/register
    It hooks into all require calls to transpile your app at runtime, and lets you start your app with regular Node.