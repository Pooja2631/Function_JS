var list= ["vishal","deepti", "ranjan", "amla", "savita", "neha"]
var i=0
var list2=[]
while(i<list.length){
    var j=0
    var count =0
    const pass = "pass"
    while(j<list.length){
        if(list[i]==list[j]){
            count=count+1

        }
        j++
    }if(list2.length<2){
        list2.push(count) 
    }
    i++
    
}
console.log(list2)