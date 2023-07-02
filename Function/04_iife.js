// Immediately Invoked Function Expressions (IIFE)

// we use IIFE b/c sometimes there is a pollution due to global scope 
// to remove pollution we use IIFE

(function chai(){ //--> named IIFE
    console.log(`DB CONNECTED`)
}) ();
 
 ( (name) =>  { 
     console.log(`DB CONNECTED2 ${name}`)
 }) ("Sumit")
