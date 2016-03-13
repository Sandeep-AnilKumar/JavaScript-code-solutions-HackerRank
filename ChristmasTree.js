/* Write a JavaScript program to generate the Christmas Tree pattern below. 
The tree should be composed of zeroes (0), and it must be topped with an asterisk (*).

        *
        0
       000
      00000
     0000000
    000000000
   00000000000
  0000000000000
 000000000000000
00000000000000000

Note: The leftmost 00 should be aligned with the left edge and there should not be any 
blank spaces preceding it on the last line.

Input is the number of rows.

*/

function processData(input) {
    var rows = input;
    
    for (var i = 0; i < rows - 1; i++) { 
        var str = ''; 
        var space = (rows - 3 - i);
        
        if (i == 0) {
            str += ' '.repeat(space + 1) + '*\n';
        }

        str += ' '.repeat(space + 1);
        var zero = 2 * i + 1;
        str += '0'.repeat(zero);

        console.log(str);
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