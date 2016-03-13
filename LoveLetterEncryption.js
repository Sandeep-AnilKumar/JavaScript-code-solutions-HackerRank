/*	James found a love letter his friend Harry wrote to his girlfriend. 
*	Being a prankster, he decides to make some fun adjustments to it by changing each of its words into palindromes.
*
*	To do this, he follows two rules:
*
*	He can reduce the value of a letter (e.g.: he can reduce d to c, but can't increment c to d).
*	A letter can be reduced more than once, but once it is reduced to a it becomes locked at a and its value 
*	can no longer be changed. Each reduction in a letter's value is counted as 11 operation. For each test case, 
*	find the minimum number of operations required to convert the given string to a palindrome.
*
*	Input Format
*
*	The first line contains an integer, TT (the number of test cases). 
*	Each of the TT subsequent lines contains a single string of lowercase characters.
*
*	Constraints 
*	1=T=101=T=10 
*	1=1= length of string =104=104 
*	8All characters are lowercase English letters.
*
*	Output Format
*
*	For each test case, print a new line with the minimum number (as an integer) of operations 
*	required to convert the given string to a palindrome.
*
*	Sample Input
*
*	4
*	abc
*	abcba
*	abcd
*	cba
*	
*	Sample Output
*
*	2
*	0
*	4
*	2
*	
*	Explanation
*
*	Test Case 0: abc ?? abb ?? aba. We print the number of operations, 22, on a new line.
*
*	Test Case 1: abcba is already a palindrome. We print the number of operations, 00, on a new line.
*
*	Test Case 2: abcd ?? abcc ?? abcb = abca. Then abca ?? abba. We print the number of operations, 44, on a new line.
*
*	Test Case 3: cba ?? bba ?? aba. We print the number of operations, 22, on a new line.
*/

function processData(input) {
    var inputs = input.split("\n");
    var strings = inputs[0];
    var count = 1;
    while(strings-- > 0) {
        var string = inputs[count++];
        var end = string.length - 1;
        var start = 0;
        var operations = 0;
        while(start < end) {
            operations += Math.abs(string.charCodeAt(end--) - string.charCodeAt(start++));
        }
            console.log(operations);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});