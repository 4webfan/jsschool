function calculator( firstNumber ){

    this.inputParam = firstNumber;
    this.result = firstNumber;

    this.sum = function(){

        this.result = this.inputParam;

        for( var i = 0; i < arguments.length; i++ ){
            this.result += arguments[i];
        }

       return this.result;

    }

    this.dif = function(){
        this.result = this.inputParam;

        for( var i = 0; i < arguments.length; i++ ){
            this.result -= arguments[i];
        }

        return this.result;
    }

    this.div = function(){
        this.result = this.inputParam;

        for( var i = 0; i < arguments.length; i++ ){
            if( arguments[i] != 0)
                this.result = this.result/arguments[i];
        }

        return this.result;

    }

    this.mul = function(){
        this.result = this.inputParam;

        for( var i = 0; i < arguments.length; i++ ){
            this.result *= arguments[i];
        }

        return this.result;
    }
}

var myCalculator = new calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

