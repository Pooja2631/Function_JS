function firstN(n, callback){
    console.log(n, callback())
    father()
}

function surname(){
    return "Chauhan"
}

function father(){
    setTimeout(()=>console.log("Ranjan"), 2000)
}

firstN("Deepti", surname)