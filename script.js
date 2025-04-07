document.addEventListener("DOMContentLoaded", function(){

    
    let onLoadEl = document.getElementById("onload");
   
    
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   });

   
let directionEl = document.getElementById("direction");


document.addEventListener("keydown", function(e) {

 
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

   let buttonEl = document.getElementById("clickMe");
   buttonEl.addEventListener("click", clickEvent);
   function clickEvent(){
    buttonEl.innerText = "You clicked me!"
   }

   let buttonBackground = document.getElementById("randomColorBtn")
   buttonBackground.addEventListener("click", getRandomColor)


    function getRandomColor() {
        
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
       document.querySelector("body").style.backgroundColor = randomColor
    }
    
    function changeBtnStyle() {
        const btn = document.querySelector(".cool-btn")
        btn.classList.toggle("glow"); // Toggles glow effect
       }
       
   