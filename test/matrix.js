
var expect = require('chai').expect;
var Matrix = require('../').Matrix;

describe('Matrix', function(){
  it('new Matrix()', function(){

    var A = new Matrix([
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ]);

    expect(A.elements()).to.deep.equal([
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ]);

    var B = new Matrix(2, 2, 2);
    expect(B.elements()).to.deep.equal([
      [ 2, 2 ],
      [ 2, 2 ]
    ]);

  });

  it('get()', function(){

    var A = new Matrix([
      [ 1, 2 ],
      [ 3, 4 ]
    ]);

    expect(A.get(0,0)).to.equal(1);
    expect(A.get(1,1)).to.equal(4);

  });

  it('set()', function(){

    var A = new Matrix([
      [ 1, 2 ],
      [ 3, 4 ]
    ]);

    A.set(0,0,9);
    A.set(1,1,10);

    expect(A.get(0,0)).to.equal(9);
    expect(A.get(1,1)).to.equal(10);

  });

  it('diagonal()', function(){

    var x = [ 1, 2, 3 ];

    var A = Matrix.diagonal(x);

    expect(A.elements()).to.deep.equal([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ]);

  });

  it('transpose()', function(){

    var A = new Matrix([
      [ 1, 2 ],
      [ 3, 4 ],
      [ 5, 6 ]
    ]);

    var At = A.transpose();

    expect(At.elements()).to.deep.equal([
      [ 1, 3, 5 ],
      [ 2, 4, 6 ]
    ]);

  });

  it('add()', function(){

    var A = new Matrix([
      [ 1, 3 ],
      [ 1, 0 ],
      [ 1, 2 ]
    ]);

    var B = new Matrix([
      [ 0, 0 ],
      [ 7, 5 ],
      [ 2, 1 ]
    ]);

    var AB = A.add(B);
    var BA = B.add(A);

    expect(AB.elements()).to.deep.equal(BA.elements());
    expect(AB.elements()).to.deep.equal([
      [ 1, 3 ],
      [ 8, 5 ],
      [ 3, 3 ]
    ]);

  });

  it('subtract()', function(){
    var A = new Matrix([
      [ 1, 3 ],
      [ 1, 0 ],
      [ 1, 2 ]
    ]);

    var B = new Matrix([
      [ 0, 0 ],
      [ 7, 5 ],
      [ 2, 1 ]
    ]);

    var AB = A.subtract(B);
    var BA = B.subtract(A);

    expect(AB.elements()).to.deep.equal([
      [ 1, 3 ],
      [ -6, -5 ],
      [ -1, 1 ]
    ]);

    expect(BA.elements()).to.deep.equal([
      [ -1, -3 ],
      [ 6, 5 ],
      [ 1, -1 ]
    ]);

  });

  it('x()', function(){
    var A = new Matrix([
      [ 1, 2 ],
      [ 3, 4 ],
      [ 5, 6 ]
    ]);
    var M = A.x(10);
    expect(M.elements()).to.deep.equal([
      [ 10, 20 ],
      [ 30, 40 ],
      [ 50, 60 ]
    ]);
  });

  it('product()', function(){
    var A = new Matrix([
      [ 1, 2 ],
      [ 3, 4 ],
      [ 5, 6 ]
    ]);

    var B = new Matrix([
      [ 1, 2, 3, 4 ],
      [ 5, 6, 7, 8 ]
    ]);

    var C = A.product(B);

    expect(C.elements()).to.deep.equal([
      [ 11, 14, 17, 20 ],
      [ 23, 30, 37, 44 ],
      [ 35, 46, 57, 68 ]
    ]);

  });

});
