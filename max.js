function greet(){
    let a=[23,45,6,7,87]
    let i=0
    let max=0
    while (i<a.length){
        if(a[i]>max){
            max=a[i]
        }i++  
    }
    console.log(max)
}
greet()