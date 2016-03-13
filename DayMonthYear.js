/* Given a date as a string, find the day, month and year of that date. If -1 is encountered as an input, do not process it.
*	getYear returns values 00 to 99 if year is from 1900 to 1999 and returns more than 100 if the value is after 2000.
*	for 2005, it'll return 105. for 1999 it'll return 99. And for values less than 1900, a value less than 0 is given.
* for 1800, -100 is returned. Methods are present in the Date class for calculating day, month and year.
*/


function findDay(myDate) {
    if(myDate != -1) {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var d = new Date(myDate);
        var day = d.getDay();
        console.log(days[day]);    
    }
}
function findMonth(myDate) {
    if(myDate != -1) {
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var d = new Date(myDate);
        var month = d.getMonth();
        console.log(months[month]);    
    }
}
function findYear(myDate) {
    if(myDate != -1) {
        var d = new Date(myDate);
        var year = d.getYear();
        console.log(year);    
    }
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var dates = _input.split('\n');

    for (var i = 0; i < dates.length - 1; i++) {
        findDay(dates[i]);
        findMonth(dates[i]);
        findYear(dates[i]);
    }
});
