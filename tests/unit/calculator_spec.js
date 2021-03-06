var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()

  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers together', function(){
      calculator.numberClick(1)
      calculator.operatorClick('+')
      calculator.numberClick(4)
      calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  it('it can subtract one number from another', function(){
      calculator.numberClick(7)
      calculator.operatorClick('-')
      calculator.numberClick(4)
      calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply two numbers together', function(){
      calculator.numberClick(3)
      calculator.operatorClick('*')
      calculator.numberClick(5)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 15)
  })

  it('it can divide one number by another', function(){
      calculator.numberClick(3)
      calculator.operatorClick('*')
      calculator.numberClick(5)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 15)
  })

  it('it can concatenate multiple number button clicks', function(){
      calculator.numberClick(2)
      calculator.numberClick(3)
      calculator.numberClick(7)
      calculator.numberClick(5)
      assert.equal(calculator.runningTotal, 2375)
  })

  it('it can chain multiple operations together', function(){
      calculator.numberClick(9)
      calculator.operatorClick("*")
      calculator.numberClick(3)
      calculator.operatorClick("-")
      calculator.numberClick(1)
      calculator.numberClick(0)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 17)
  })

  it('it can clear the running total without affecting the calculation', function(){
      calculator.numberClick(9)
      calculator.operatorClick("*")
      calculator.numberClick(5)
      assert.equal(calculator.runningTotal, 5)
      calculator.clearClick()
      assert.equal(calculator.runningTotal, 0)
  })

});
