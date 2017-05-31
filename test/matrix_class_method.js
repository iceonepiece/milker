
var expect = require('chai').expect;
var Matrix = require('../').Matrix;

describe('Matrix - class methods', function(){

  it('Zero(n, m) : Matrix', function(){

    var A = Matrix.Zero(3,4);

    expect(A.elements()).to.deep.equal([
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ]
    ]);

  });

  it('I(n) : Matrix', function(){

    var A = Matrix.I(3);

    expect(A.elements()).to.deep.equal([
      [ 1, 0, 0 ],
      [ 0, 1, 0 ],
      [ 0, 0, 1 ]
    ]);

  });

  it('Diagonal(array) : Matrix', function(){

    var x = [ 1, 2, 3 ];

    var A = Matrix.Diagonal(x);

    expect(A.elements()).to.deep.equal([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ]);

  });

  it('solve(A, b) : Array', function(){

    var A = new Matrix([
      [ 1, 1, 1 ],
      [ 0, 2, 5 ],
      [ 2, 5, -1 ]
    ]);

    var b = [ 6, -4, 27 ];

    // solve a matrix equation of the form Ax = b
    var x = Matrix.solve(A, b);

    expect(x).to.deep.equal([ 5, 3, -2 ]);

  });


});
