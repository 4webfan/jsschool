
function inherit( child, parent ){

    child.prototype = Object.create( parent.prototype );
    child.prototype.constructor = child;
    child.prototype.parent = parent;

}

function calculator( firstNumber ){

    this.setProp(firstNumber);

}


calculator.prototype.setProp = function(firstNumber){
    this.inputParam = firstNumber;
    this.result = firstNumber;
}

calculator.prototype.sum = function(){

    this.result = this.inputParam;

    for( var i = 0; i < arguments.length; i++ ){
        this.result += arguments[i];
    }

   return this.result;


}

calculator.prototype.dif = function(){
    this.result = this.inputParam;

    for( var i = 0; i < arguments.length; i++ ){
        this.result -= arguments[i];
    }

    return this.result;
}

calculator.prototype.div = function(){
    this.result = this.inputParam;

    for( var i = 0; i < arguments.length; i++ ){
        if( arguments[i] != 0)
            this.result = this.result/arguments[i];
    }

    return this.result;

}

calculator.prototype.mul = function(){
    this.result = this.inputParam;

    for( var i = 0; i < arguments.length; i++ ){
        this.result *= arguments[i];
    }

    return this.result;
}


function SqlCalc( firstNumber ){
    this.setProp(firstNumber);
}


inherit(SqlCalc, calculator);

SqlCalc.prototype.sum = function(){

    SqlCalc.prototype.parent.prototype.sum.apply(this, arguments);
    return this.result*this.result;

}

SqlCalc.prototype.dif = function(){

    SqlCalc.prototype.parent.prototype.dif.apply(this, arguments);
    return this.result*this.result;

}

SqlCalc.prototype.div = function(){

    SqlCalc.prototype.parent.prototype.div.apply(this, arguments);
    return this.result*this.result;

}

SqlCalc.prototype.mul = function(){

    SqlCalc.prototype.parent.prototype.mul.apply(this, arguments);
    return this.result*this.result;

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

