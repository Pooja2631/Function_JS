function greet(num){
    let input=require("readline-sync")
    let user = input.questionInt("enter num1....")
    let i=1
    let sum=0
    while (i<user){
        if (user%i==0){
            sum=sum+i
        }i++
    }
    if (sum==user){
        console.log("it is perfect number",i)
    }
    else{
        console.log("it is not perfect number",i)
    }   
}
greet(6)


// let input=require("readline-sync")
// let user = input.questionInt("enter num1....")
// function perfect(num){	  
//     sum=0
//     for(var i=1;i<user;i++){
//     	if(user%i === 0){
//     	    sum+=i
//         }
//     }
//     	if(sum === user){
//     	   console.log(user," is a perfect number");
//     	}
//     	else{
//     	    console.log(user," is not a perfect number");
//     	}
// }	
// perfect(6);