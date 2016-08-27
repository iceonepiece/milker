
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
