let a = require("readline-sync");
var num1= a.questionInt("enter your number--")
function prime(){
    let i=2
    count=0
    while (i<num1){
        if(num1%i===0){
            count=count+1
	        }
	        i++;
        }       
    if (count===0){
	   console.log("prime number")
    }
	else{
        console.log("not prime number")
    }
}
prime()