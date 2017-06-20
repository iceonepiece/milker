
const expect = require('chai').expect;
const Matrix = require('../').Matrix;
const SparseMatrix = require('../').SparseMatrix;

describe('SparseMatrix - instance methods', function(){

  it('new SparseMatrix() : SparseMatrix', function(){

    const inputMatrixA = [
        [ 1, 0, 2, 1 ],
        [ 0, 3, 4, 9 ],
        [ 5, 1, 2, 1 ],
        [ 2, 0, 0, 7 ]
    ];

    const A = new SparseMatrix(inputMatrixA);

    expect(A.elements()).to.deep.equal({
      values:         [1, 2, 1, 3, 4, 9, 5, 1, 2, 1, 2, 7],
      columnIndices:  [0, 2, 3, 1, 2, 3, 0, 1, 2, 3, 0, 3],
      rowPointers:    [0, 3, 6, 10, 12]
    });

    const inputMatrixB = [
        [ 1, 0, 2, 0 ],
        [ 0, 0, 0, 0 ],
        [ 3, 0, 0, 0 ],
        [ 1, 0, 0, 4 ]
    ];

    const B = new SparseMatrix(inputMatrixB);

    expect(B.elements()).to.deep.equal({
      values:         [1, 2, 3, 1, 4],
      columnIndices:  [0, 2, 0, 0, 3],
      rowPointers:    [0, 2, 2, 3, 5]
    });

    const inputMatrixC = [
        [ 10, 20,  0,  0,  0,  0 ],
        [  0, 30,  0, 40,  0,  0 ],
        [  0,  0, 50, 60, 70,  0 ],
        [  0,  0,  0,  0,  0, 80 ]
    ];

    const C = new SparseMatrix(inputMatrixC);

    expect(C.elements()).to.deep.equal({
      values:         [10, 20, 30, 40, 50, 60, 70, 80],
      columnIndices:  [ 0,  1,  1,  3,  2,  3,  4,  5],
      rowPointers:    [0, 2, 4, 7, 8]
    });

  });

  it('get2dArray() : 2D Array', function(){

    const inputMatrixA = [
        [ 1, 0, 2, 1 ],
        [ 0, 3, 4, 9 ],
        [ 5, 1, 2, 1 ],
        [ 2, 0, 0, 7 ]
    ];

    const A = new SparseMatrix(inputMatrixA);

    expect(A.get2dArray()).to.deep.equal([
        [ 1, 0, 2, 1 ],
        [ 0, 3, 4, 9 ],
        [ 5, 1, 2, 1 ],
        [ 2, 0, 0, 7 ]
    ]);

    const inputMatrixB = [
        [ 1, 0, 2, 0 ],
        [ 0, 0, 0, 0 ],
        [ 3, 0, 0, 0 ],
        [ 1, 0, 0, 4 ]
    ];

    const B = new SparseMatrix(inputMatrixB);

    expect(B.get2dArray()).to.deep.equal([
        [ 1, 0, 2, 0 ],
        [ 0, 0, 0, 0 ],
        [ 3, 0, 0, 0 ],
        [ 1, 0, 0, 4 ]
    ]);

    const inputMatrixC = [
        [ 10, 20,  0,  0,  0,  0 ],
        [  0, 30,  0, 40,  0,  0 ],
        [  0,  0, 50, 60, 70,  0 ],
        [  0,  0,  0,  0,  0, 80 ]
    ];

    const C = new SparseMatrix(inputMatrixC);

    expect(C.get2dArray()).to.deep.equal([
        [ 10, 20,  0,  0,  0,  0 ],
        [  0, 30,  0, 40,  0,  0 ],
        [  0,  0, 50, 60, 70,  0 ],
        [  0,  0,  0,  0,  0, 80 ]
    ]);

  });

});
