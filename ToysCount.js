/*	Mark and Jane are very happy after having their first kid, and Mark wants to buy some toys for him. 
*	There are N different toys, tagged with their prices, but he has only $K. 
*	He wants to buy the maximum number of toys for his son.

*	You are Mark's best friend and have to help him buy as many toys as possible.

*	Input Format

*	The first line contains two integers, N and K separated by a space. 
*	The next line contains N space separated integers indicating the price of each toy.

*	Output Format

*	Output an integer that denotes the maximum number of toys Mark can buy with $K.
* Sample input ------------ 
7 50
1 12 5 111 200 1000 10
--------------------------
*/

function processData(input) {
    
    var pat = new RegExp("\\n"); //first break the input into number of rows, cash and array elements;
    var rows = input.split(pat);
    
    pat = new RegExp("\\s");
    
    var cash = rows[0].split(pat).map(Number)[1];// rows[0] = 7 50. 50 is cash.
    var array = rows[1].split(pat).map(Number);//rows[1] = 1 12 5 111 200 1000 10
    
    array.sort(function (a , b) { // sort in increasing order.
       return a - b; 
    });
    
    var totalToys = 0;
    
    while(cash >= 0) {
        cash -= array[totalToys];
        totalToys++;
    }
    console.log(totalToys-1);// since during the last execution of while loop the totalToys was incremented by one, even
	//though cash got below 0.
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
