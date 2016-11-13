"use strict";

function forEach( arr, callback ){
	if( Array.isArray( arr ) ){
		for( let i = 0; i < arr.length; i++ ){
			callback( arr[i], i, arr);
		}
	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

function filter( arr, callback ){

	let rezArr = [];

	if( Array.isArray( arr ) ){

		for( let i = 0; i < arr.length; i++ ){
			if( callback( arr[i], i, arr) ){
				rezArr.push( arr[i] );
			}
		}

		return rezArr;
	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

function map( arr, callback ){
	let rezArr = [];

	if( Array.isArray( arr ) ){

		for( let i = 0; i < arr.length; i++ ){
			rezArr.push( callback( arr[i], i, arr) );
		}

		return rezArr;
	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

function reduce( arr, callback, initialValue){
	if(Array.isArray( arr ) ){


		let index = 0;
		let previousValue, rez;

		if( initialValue != undefined ) {
			previousValue = initialValue;
		}
		else if( arr.length == 0 ){
			throw new Error('Reduce of empty array with no initial value(…)');
		}else{
			previousValue = arr[0];
			index = 1;
		}

		for( let i = index; i < arr.length; i++){
			previousValue = callback( previousValue, arr[i], i, arr );
		}

		return previousValue;

	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

function slice( arr, start, end ){
	if(Array.isArray( arr ) ){
		let rezArr = [];
		// one arg
		if( end === undefined){
			end = arr.length;
		}
		if( start < 0 ){
			start = arr.length + start;
		}
		if( end < 0 ){
			end = arr.length + end;
		}
		if( end < start ){
			return rezArr;
		}

		for( let i = start; i < end; i++ ){
			rezArr.push( arr[i] );
		}

		return rezArr;		

	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

function splice( arr, index, quantity ){
	if(Array.isArray( arr ) ){

		let rezArr = [], 
		redicedArr = [],
		newValues = [],
		pushedFlag = true,
		args = arguments;

		if( args.length > 3){
			for( let i = 3; i < args.length; i++ ){
				newValues.push( args[i] );
			}
		}

		if( quantity == undefined ){
			quantity = arr.length - index;
		}else if( quantity < 0 || quantity == 0 && newValues.length == 0 ){
			return [];
		}

		if( index < 0 ){
			index = arr.length + index;
		}

		for( let i = 0; i < arr.length; i++ ){
			if( i < index || i > index + quantity ){
				rezArr.push(arr[i]);
			}else{
				// there is new value
				if( newValues.length > 0 && pushedFlag ){
					for( let j = 0; j < newValues.length; j++){
						rezArr.push(newValues[j]);
					}
					
					pushedFlag = false;
				}
				( quantity != 0 ) ? redicedArr.push(arr[i]) : rezArr.push(arr[i]);
			}
		}


		// modify array 
		arr.length = 0;
		for( let i = 0; i < rezArr.length; i++){
			arr.push( rezArr[i] );
		}

		return redicedArr;		

	}else{
		throw new Error( 'TypeError.. first argument is not Array =(' );
	}
}

// -------------------- call example -----------------

//------------ filter
let array = [1, 2, 3, 4, 5, 6];
let str = '1,2,3,4,5';
forEach( array, item => console.log(item) );

//------------ forEach
let greaterThan4 = filter([], item => item > 4);
console.log( greaterThan4 );

// ----------- map
let sqare = map(array, item => item*item);
console.log(sqare);

//------------ reduce
var arr = [15, 4, 2]

var result = reduce( arr, ( sum, current ) => sum + current, 0);

console.log( result ); // 15

//------------ slice
var arr = [1,2,3,4,5];
console.log( slice(arr, 0,3) ); //возвращает [1,2,3]
console.log( slice(arr,3) ); //возвращает [4,5]
console.log( slice(arr,1,-1) ); //возвращает [2,3,4]
console.log( slice(arr,-3,-2) ); //возвращает [3]
console.log( slice(arr,-2,-3) ); //возвращает []
//console.log( slice(-2,-3) ); // Ошибка*/

//------------ splice

var fruits = ["апельсины", "яблоки", "груши","виноград"],
 deleted = splice(fruits,2, 0, "киви", "дыня");
console.log(deleted); //выведет []
console.log(fruits); //выведет ["апельсины", "яблоки","киви", "дыня", "груши", "виноград"]