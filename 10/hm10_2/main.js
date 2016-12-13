
class calculator {

  constructor(firstNumber) {
    this.inputParam = firstNumber;
    this.result = firstNumber;
  }

  sum() {
    this.result = this.inputParam;
    Array.prototype.forEach.call( arguments, item => this.result += item);
    return this.result;
  }

  dif(){
    this.result = this.inputParam;
    Array.prototype.forEach.call( arguments, item => this.result -= item);
    return this.result;
  }

  div(){
    this.result = this.inputParam;
    Array.prototype.forEach.call( arguments, item => {
        if(item) this.result = this.result/item;
    });
    return this.result;
  }

  mul(){
    this.result = this.inputParam;
    Array.prototype.forEach.call( arguments, item => this.result *= item);
    return this.result;
  }
  

}



class SqlCalc extends calculator {
    sum() {
        let tmp = super.sum.apply(this, arguments);
        return tmp*tmp;
    }
    dif(){
        let tmp = super.dif.apply(this, arguments);
        return tmp*tmp;
    }
    div(){
        let tmp = super.div.apply(this, arguments);
        return tmp*tmp;
    }
    mul(){
        let tmp = super.mul.apply(this, arguments);
        return tmp*tmp;
    }
}




///////////////////////////
var myCalculator = new calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log('------------------------------------------');

var sqlCalc = new SqlCalc(100);
console.log(sqlCalc.sum(1,2,3) );
console.log(sqlCalc.dif(10, 20));
console.log(sqlCalc.div(2, 2));
console.log(sqlCalc.mul(2, 2));

