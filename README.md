# milker
A very amazing matrix library for Node.js

## Installation
    $ npm install milker

## Example

```js
var milker = require('milker');
var Matrix = milker.Matrix;

var A = new Matrix([
  [1, 2, 3],
  [4, 5, 6]
]);

var B = new Matrix([
  [1, 1, 1],
  [1, 1, 1]
]);

var C = new Matrix([
  [0, 1],
  [1, 0],
  [0, 1]
]);

A.transpose();
A.add(B);
A.subtract(B);
A.product(C);

```
