'use strict';

var Vector = require('./Vector');

function Matrix(rows, cols, val){

  if( arguments.length == 1 ){
    this._elements = rows;
    this._rows = this._elements.length;
    this._cols = this._elements[0].length;
  }
  else{

    this._elements = createElements(rows, cols, val);
    this._rows = rows;
    this._cols = cols;
  }

}

module.exports = Matrix;

Matrix.diagonal = function(x){
  var n = x.length;
  var newElements = createElements(n, n, 0);

  for( var i = 0; i < n; i++ ){
    newElements[i][i] = x[i];
  }

  return new Matrix(newElements);
}

Matrix.prototype.row = function(x){
  return new Vector(this._elements[x]);
}

Matrix.prototype.col = function(x){

  var elements = [];
  var n = this._elements.length;

  for( var i = 0; i < n; i++ ){
    elements.push( this._elements[i][x] );
  }
  return new Vector(elements);
}

Matrix.prototype.rows = function(){
  return this._rows;
}

Matrix.prototype.cols = function(){
  return this._cols;
}

Matrix.prototype.elements = function(){
  return this._elements;
}

Matrix.prototype.get = function(row, col){
  return this._elements[row][col];
}

Matrix.prototype.set = function(row, col, val){
  this._elements[row][col] = val;
}

Matrix.prototype.transpose = function(){

  var newElements = createElements(this._cols, this._rows, 0);

  for( var i = 0; i < this._rows; i++ ){
    for( var j = 0; j < this._cols; j++ ){
      newElements[j][i] = this._elements[i][j];
    }
  }

  return new Matrix(newElements);
}

Matrix.prototype.add = function( M ){

  if( this._rows != M.rows() || this._cols != M.cols() ){
    return null;
  }

  var newElements = createElements(this._rows, this._cols, 0);

  for( var i = 0; i < this._rows; i++ ){
    for( var j = 0; j < this._cols; j++ ){
      newElements[i][j] = this._elements[i][j] + M.get(i,j);
    }
  }
  return new Matrix(newElements);
}

Matrix.prototype.subtract = function( M ){

  if( this._rows != M.rows() || this._cols != M.cols() ){
    return null;
  }

  var newElements = createElements(this._rows, this._cols, 0);

  for( var i = 0; i < this._rows; i++ ){
    for( var j = 0; j < this._cols; j++ ){
      newElements[i][j] = this._elements[i][j] - M.get(i,j);
    }
  }
  return new Matrix(newElements);
}

Matrix.prototype.x = function( n ){

  var newElements = createElements(this._rows, this._cols, 0);

  for( var i = 0; i < this._rows; i++ ){
    for( var j = 0; j < this._cols; j++ ){
      newElements[i][j] = this._elements[i][j] * n;
    }
  }
  return new Matrix(newElements);
}

Matrix.prototype.product = function( M ){

  if( this._cols != M.rows() ){
    return null;
  }

  var newRows = this._rows;
  var newCols = M.cols();

  var newMatrix = new Matrix(newRows, newCols, 0);

  for( var i = 0; i < newRows; i++ ){
    for( var j = 0; j < newCols; j++ ){
      var dotProduct = this.row(i).dot( M.col(j) );
      newMatrix.set(i, j, dotProduct);
    }
  }

  return newMatrix;
}

function createElements(row, col, val){
  var elements = [];
  for( var i = 0 ; i < row; i++ ){
    elements[i] = [];
    for( var j = 0 ; j < col; j++ ){
      elements[i][j] = val;
    }
  }

  return elements;
}
