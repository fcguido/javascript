var abc =[{"c":{"a":2}},{"d":{"b"}:3},{"e":{"c":5}}]
abc.forEach(function(a,i,z){
... 
... var llave = Object.keys(a)[0];
... 
... console.log(a[llave]);
... })
