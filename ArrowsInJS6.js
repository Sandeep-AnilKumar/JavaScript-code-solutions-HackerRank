// how to use arrows which were introduced in ECMA script 6 onwards. Very powerful functional programming concept.
/* So what this code does is it takes an array called some_array as an input and and uses the map method in the Array class
*	to map all the even elements to be incremented by 1 and odd to be decremented by one.
*	Using an arrow, the function(a) {return b;} becomes (a) => b;

* so 
some_array.map(function(num) {
	if(num % 2 === 0) {
		return ++num;
	}
	else {
		return --num;
	}
});

becomes

some_array.map((num) => num % 2 === 0 ? ++num : --num);
*/

// so instead of writing the below code : -

var my_function = function(some_array){
    return some_array.map(function(num) {
	if(num % 2 === 0) {
		return ++num;
	}
	else {
		return --num;
	}
});
}

// we can just write.

var my_function = some_array => some_array.map(num => num % 2 === 0 ? ++num : --num);
