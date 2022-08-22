let input=require("readline-sync")
let num = input.questionInt("enter num1....")
let num1 = input.questionInt("enter num1....")
function add(){
    add=num+num1
    return add
}
function sub(){
    sub=num-num1
    return sub
}
function mul(){
    mul=num*num1
    return mul
}
function div(){
    div=num/num1
    return div
}
function main_fun(){
    let n= input.question("enter calculate....")
    if (n=='add'){
        console.log(add())
    }
    if (n=='sub'){
        console.log(sub())
    }
    if (n=='mul'){
        console.log(mul())
    }
    if (n=='div'){
        console.log(div())
    }
}
main_fun()
