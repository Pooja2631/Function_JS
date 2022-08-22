let str = "I love bro"
function reverseString(str)
{
const strarr=str.split(' ');
let reverseStr=strarr.reverse();
reverseStr=reverseStr.join(' ');
return reverseStr;
}
console.log(reverseString(str));
