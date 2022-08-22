function AlternatePrimes(a,b) {
        var c = 0;
        for(var i=a; i<=b; i++) {
                    if(i===0 || i===1) {
                      continue;
                    }
                    var count = 0;
                    for(var j=1; j<=b; j++) {
                                  if(i%j===0) {
                                          count++;
                                        }
                                  }
    
                      if(count<=2) {
                              c++;
                              if(c%2 !== 0) {
                                            console.log(i );
                                          }
    
                            }
    
                    }
    }
    
  AlternatePrimes(0,50);