// Create Calculator with 4 Standard Outputs
//  + (addition) ,  - (subtraction),  / (division) 
// last but not least ,  * (multiplication) 

function times() {  
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = x * y ;
    document.getElementById("number3").innerHTML = z;
}
function minus() {  
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var subt = x - y ;
    document.getElementById("number3").innerHTML = subt;
}
function imweak() {  
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var add = x + y ;
    document.getElementById("number3").innerHTML = add;
}
function overunder() {  
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var div = x / y ;
    document.getElementById("number3").innerHTML = div;
}