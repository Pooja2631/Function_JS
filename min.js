function greet(){
    let a=[23,45,6,7,87]
    let i=0
    let min=1
    while (i<a.length){
        if(a[i]<min){
            min=a[i]
        }i++  
    }
    console.log(min)
}
greet()

