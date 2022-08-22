var a=()=>{
    console.log("a");
    return ()=>{
        console.log("inner");
        return ()=>{
            console.log("child");
        };
        
        
    };
  };
  // a()()()
  let aa=a()
  let b=aa()
  b()