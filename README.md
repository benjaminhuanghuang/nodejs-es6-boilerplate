# Node.js + ES6 Study project

## Reference
- Better Node with ES6, Pt. I

- Writing Your Node.js Apps Using ES6

- https://github.com/JustinDrake/node-es6-examples

- How to use ES6 in NodeJS

- Babel 入门教程


## Setup
Install
```
  npm i -D babel-cli babel-preset-env
```
Creat babel in .babelrc 

or package.json
```
"babel": {
  "presets": ["env"]
}
``` 
## Scripts
```
  "build": "babel src  --out-dir dist",

  "build": "babel ./ --ignore node_modules,test -d dist",
```