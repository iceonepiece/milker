'use strict';

function SparseMatrix(matrix){

  this._elements = {
    values:         [],
    columnIndices:  [],
    rowPointers:    []
  };

  this._rows = matrix.length;
  this._cols = matrix[0].length;

  this._elements.rowPointers.push(0);

  for(let i = 0; i < this._rows; i++){

    for(let j = 0; j < this._cols; j++){
      if( matrix[i][j] > 0 ){
        this._elements.columnIndices.push(j);
        this._elements.values.push(matrix[i][j]);
      }
    }
    this._elements.rowPointers.push( this._elements.columnIndices.length );
  }
}

SparseMatrix.prototype.elements = function(){
  return this._elements;
}

SparseMatrix.prototype.get2dArray = function(){
  const values = this._elements.values;
  const rowPointers = this._elements.rowPointers;
  const columnIndices = this._elements.columnIndices;

  var denseMatrix = [];
  for(let i = 0; i < this._rows; i++){
    var row = [];
    
    for(let j = 0; j < this._cols; j++){
      row.push(0);
    }
    denseMatrix.push(row);
  }

  for(let i = 0; i < this._rows; i++){
    const rowStart = rowPointers[i];
    const rowEnd = rowPointers[i+1];
    for(let j = rowStart; j < rowEnd; j++){
      const colIndex = columnIndices[j]
      denseMatrix[i][colIndex] = values[j];
    }
  }

  return denseMatrix;
}


module.exports = SparseMatrix;
