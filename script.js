document.addEventListener("DOMContentLoaded", function(){

    
    let onLoadEl = document.getElementById("onload");
   
    
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

   
let directionEl = document.getElementById("direction");


document.addEventListener("keydown", function(e) {

 
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

   let buttonEl = document.getElementById("clickMe");

document.addEventListener("click");

document.getElementById("clickMe")
    this.innerText = "You clicked me!";

