'use strict';

function Vector(elements){
  this._elements = elements;
  this._length = elements.length;
}

Vector.prototype.elements = function(){
  return this._elements;
}

Vector.prototype.dot = function(x){
  var sum = 0;
  var xElements = x.elements();
  for( var i = 0; i < this._length; i++ ){
    sum += this._elements[i] * xElements[i];
  }

  return sum;
}

module.exports = Vector;
