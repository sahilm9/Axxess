// Selecting elements using dom selectors

var numInput = document.querySelector("input[type='number']");
var start = document.querySelector("#start");
var restart = document.querySelector("#restart");
var resetButton = document.querySelector("#reset");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

// counter to increment, target for input and gameOver for gamecondition

var counter =0;
var target;
var gameOver = false;

// function for smile box( prime function)
function checkPrime(num) {
    if(num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

// main logic
function mainfunction(){
    var setIntervalId = setInterval(function(){
        if(!gameOver){
            console.log(counter);
            var display = function(){
                
            // checking for divisibility by 3    
            if(counter% 3 === 0){
               // adding "divisibility-background" class defined in styles.css    
               box1.classList.add("divisibility-background"); 
               console.log("divided by 3");
            }
            else{
                // if number isn't divisbile by 3, removing the below class
                box1.classList.remove("divisibility-background");
            }
            // checking for divisibility by 5        
            if(counter % 5 === 0){
                 // adding "divisibility-background" class defined in styles.css 
                box2.classList.add("divisibility-background");
                console.log("divided by 5"); 
            }
    
            else{
                // if number isn't divisbile by 5, removing the below class
                box2.classList.remove("divisibility-background");   
            }
               
            // checking if number is perfect sqaure  
            if(counter % Math.sqrt(counter) === 0){
                // adding "perfect-square-background" class defined in styles.css
                box3.classList.add("perfect-square-background");
                console.log("perfect square");         
            }
            
            else{
                // if number isn't perfect square, removing the below class
                box3.classList.remove("perfect-square-background"); 
            }
            
            