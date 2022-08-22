let input=require("readline-sync")
let user = input.questionInt("enter num1....")
function main(){
    let i=1
    let mul=1
    while(i<=user){
        let user1 = input.questionInt("enter num1....")
            mul*=user1
            i++
    }console.log(mul)
}
main()
