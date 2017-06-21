'use strict';

function SparseMatrix(matrix, rowPointers, columnIndices, rows, cols){
  if( arguments.length == 5 ){
    this._elements = {
      values:         matrix,
      columnIndices:  columnIndices,
      rowPointers:    rowPointers
    };

    this._rows = rows;
    this._cols = cols;

  } else {
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
}

SparseMatrix.prototype.transpose = function(){
  const values = this._elements.values;
  const rowPointers = this._elements.rowPointers;
  const columnIndices = this._elements.columnIndices;

  const newRows = this._cols;
  const newCols = this._rows;

  var newRowPointers = [];
  for(let i = 0; i < newRows + 1; i++){
    newRowPointers.push(0);
  }

  for(let i = 0; i < columnIndices.length; i++){
    if( newRowPointers[columnIndices[i] + 1] == undefined )
      newRowPointers[columnIndices[i] + 1] = 0;

    newRowPointers[columnIndices[i] + 1] += 1;
  }

  for(let i = 1; i < newRowPointers.length; i++){
    newRowPointers[i] += newRowPointers[i - 1];
  }

  var newColumnIndices = new Array(columnIndices.length);
  var newValues = new Array(values.length);

  var offsetTable = {};
  for(let i = 0; i < this._rows; i++){
    for(let j = rowPointers[i]; j < rowPointers[i+1]; j++){
      const rowIndex = columnIndices[j];
      const colIndex = i;
      const value = values[j];

      if(offsetTable[rowIndex] == undefined){
        offsetTable[rowIndex] = 0;
      }

      const toStoreIndex = newRowPointers[rowIndex] + offsetTable[rowIndex];
      newColumnIndices[toStoreIndex] = colIndex;
      newValues[toStoreIndex] = value;
      offsetTable[rowIndex] += 1;
    }
  }
  return new SparseMatrix(newValues, newRowPointers, newColumnIndices, newRows, newCols);
}

SparseMatrix.prototype.rows = function(){
  return this._rows;
}

SparseMatrix.prototype.cols = function(){
  return this._cols;
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
