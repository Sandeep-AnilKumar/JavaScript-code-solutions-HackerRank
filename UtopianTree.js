/*	The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. 
Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. 
How tall will her tree be after NN growth cycles?

Input Format

The first line contains an integer, TT, the number of test cases. 
TT subsequent lines each contain an integer, NN, denoting the number of cycles for that test case.

Constraints 
1=T=101=T=10 
0=N=600=N=60
Output Format

For each test case, print the height of the Utopian Tree after NN cycles. Each height must be printed on a new line.
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var height = 1;
        if(n === 0){
            console.log(height);
        }
        else if(n === 1) {
            console.log(height + 1);
        }
        else {
            var springSeason = true;
            while(n >= 1) {
                if(springSeason) {
                    height *= 2;  
                    n--;
                    springSeason = false;
                }
                else {
                    height += 1;
                    n--;
                    springSeason = true;
                }
            }
            console.log(height);
        }
    }
}