function isAllTrue( source, filterFn ){

    try{
        if( source.length == 0 ){
            throw new Error('Массив не должен быть пустым');
        }

        for( var i = 0; i < source.length; i++ ){
            if( !filterFn( source[i] ) ){
                return false;
            }
        }

        return true;

    }catch( e ){
        console.log('Ошибка: '+ e.message);
    }

    return false;

}

function isNumber( val ) {
    return typeof val === 'number';
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];



console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log(isAllTrue([], isNumber)); //вернет false

