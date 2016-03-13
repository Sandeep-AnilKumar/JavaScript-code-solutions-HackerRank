//Function to find the second maximum number in an array. can also be done after sorting the array.
function processData(myArray) {
    var max;
    var secondMax;
    myArray.forEach(function (item) {
        if(max === undefined) {
            max = item;
        }
        else if(secondMax === undefined && item < max) {
            secondMax = item;
        }
        else if(secondMax === undefined && item > max){
            secondMax = max;
            max = item;
        }
        else if(item > max) {
            secondMax = max;
            max = item;
        }
        else if(item > secondMax && item < max) {
            secondMax = item;
        }
    });
	if(secondMax === undefine) {
		console.log("no second largest element exists");
	}
	else {
		console.log(secondMax);
	}
    return secondMax;
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});