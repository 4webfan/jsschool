"use strict";


function deepEqual(obj1, obj2){


	if ( obj1 === obj2 ){
		return true;
	}


	if( arguments[2] ){ // it is flag: if obj1 and obj2 is arrays

		for( let i = 0; i < obj1.length; i++){

			if( typeof obj1[i] == 'object' && obj1[i] != null && typeof obj2[i] == 'object' && obj2[i] != null ){

				if( Array.isArray(obj1[i]) && Array.isArray(obj2[i]) ){
					if( !deepEqual( obj1[i], obj2[i], true ) )
						return false;
				}else{

					if( !deepEqual( obj1[i], obj2[i] ) )
						return false;
				}

			}else if( obj1[i] != obj2[i] ){
				return false;
			}
		}
	}
	
	for( let prop in obj1 ){
		if( typeof obj1[prop] == 'object' && obj1[prop] != null && typeof obj2[prop] == 'object' && obj2[prop] != null ){

			if( Array.isArray(obj1[prop]) && Array.isArray(obj2[prop]) ){

				if( !deepEqual( obj1[prop], obj2[prop], true ) )
					return false;
			}else{

				if( !deepEqual( obj1[prop], obj2[prop] ) )
					return false;
			}

		}else if( obj1[prop] != obj2[prop] ){
			return false;
		}
	}
	return true;


}
var objA = {

    prop1: 'value1',
    prop2: 'value2',
    prop3: null,
    prop4: {

        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]

        }

    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)

};



var objB = {

    prop5: 1000,
    prop3: null,
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }

};



console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true