/* Given string ss composed of lowercase letters [a-z][a-z], 
print all the vowels together, followed by all the consonants, in the order that they appear in the string.

Sample Input: -
javascriptloops

Sample Output: -
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

*/

function vowelsAndConsonants(s) {
    
    var vowelsArray = ['a','e','i','o','u'];
    var vowelsString = '';
    var consonantString = '';
    
    for(var c of s) {
        if(vowelsArray.indexOf(c) !== -1) {
            vowelsString += c + '\n';
        }
        else {
            consonantString += c + '\n';
        }
    }
    console.log(vowelsString + consonantString);
}
