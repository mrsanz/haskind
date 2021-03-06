import { Data } from '.';
const { Ix } = Data;

describe('Ix .', () => {
  describe('range', () => {
    describe('([0, 0])', () => {
      it('== []', () => {
        Ix.range([0, 0]).should.be.eql([]);
      });
    });
    describe('([-1, 0])', () => {
      it('== [-1]', () => {
        Ix.range([-1, 0]).should.be.eql([-1]);
      });
    });
    describe('([0, 10])', () => {
      it('== [0,1,2,3,4,5,6,7,8,9]', () => {
        Ix.range([0, 10]).should.be.eql([0,1,2,3,4,5,6,7,8,9]);
      });
    });
    describe('([3, 10])', () => {
      it('== [3,4,5,6,7,8,9]', () => {
        Ix.range([3, 10]).should.be.eql([3,4,5,6,7,8,9]);
      });
    });
  });
  describe('index', () => {
    describe('([0, 0], 0)', () => {
      it('== 0', () => {
        Ix.index([0,0], 0).should.be.eql(0);
      });
    });
    describe('([0, 0])(0)', () => {
      it('== 0', () => {
        Ix.index([0,0])(0).should.be.eql(0);
      });
    });
    describe('([3, 9], 3)', () => {
      it('== 0', () => {
        Ix.index([3,9], 3).should.be.eql(0);
      });
    });
    describe('([3, 9], 4)', () => {
      it('== 1', () => {
        Ix.index([3,9], 4).should.be.eql(1);
      });
    });
  });
  describe('inRange', () => {
    describe('([0, 0], 0)', () => {
      it('== true', () => {
        Ix.inRange([0,0], 0).should.be.eql(true);
      });
    });
    describe('([0, 0])(0)', () => {
      it('== true', () => {
        Ix.inRange([0,0])(0).should.be.eql(true);
      });
    });
    describe('([0, 0], -1)', () => {
      it('== false', () => {
        Ix.inRange([0,-1], 0).should.be.eql(false);
      });
    });
    describe('([0, 0], 1)', () => {
      it('== false', () => {
        Ix.inRange([0,0], 1).should.be.eql(false);
      });
    });
    describe('([0, 1], 1)', () => {
      it('== true', () => {
        Ix.inRange([0,1], 1).should.be.eql(true);
      });
    });
  });
  describe('rangeSize', () => {
    describe('([0, 0])', () => {
      it('== 0', () => {
        Ix.rangeSize([0,0]).should.be.eql(0);
      });
    });
    describe('([0, 5])', () => {
      it('== 5', () => {
        Ix.rangeSize([0,5]).should.be.eql(5);
      });
    });
    describe('([1, 5])', () => {
      it('== 4', () => {
        Ix.rangeSize([1,5]).should.be.eql(4);
      });
    });
  });
});
