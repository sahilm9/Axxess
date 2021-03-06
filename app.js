// Selecting elements using dom selectors

var numInput = document.querySelector("input[type='number']");
var start = document.querySelector("#start-button");
var restart = document.querySelector("#restart-button");
var resetButton = document.querySelector("#reset-button");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

// counter to increment, target for input and gameOver for gamecondition

var counter =0;
var target;
var gameOver = false;

//adding event listener for startbutton where startFunction gets called which inturn starts mainfunction
start.addEventListener("click", function(){
    startFunction();
});

//adding event listener for restartbutton where startFunction gets called which inturn starts mainfunction

restart.addEventListener("click", function(){
    startFunction();
});

// adding eventlistener for resetButton where it stops the game control, changes the input to empty string and calling reset function
resetButton.addEventListener("click", function(){
    numInput.value=" ";
    gameOver = true;
    reset(); // calls reset function
});

// numInput checking for changes in input and not just clicking, when a change is made to input, reset() gets called and game starts from begining.
numInput.addEventListener("change", function(){
    
    reset();
})

//function for resetting the counter to 0 and removing any classes which are there

function reset(){
    
    counter = 0;
    box1.classList.remove("divisibility-background");
    box2.classList.remove("divisibility-background");
    box3.classList.remove("perfect-square-background");
    box4.classList.remove("prime-number-background");
}


// writing startFunction
function startFunction(){
     counter =0;
    gameOver = false; 
    target = Number(numInput.value); // changing the value from string to Number
    mainfunction(); // calling the mainfunction
}

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
            // checking if number is prime number by calling checkPrime function by passing counter
            if(checkPrime(counter)){
                // adding "prime-number-background" class defined in styles.css
                box4.classList.add("prime-number-background");
                  console.log("prime number");     
            }
            
            else{
                // if number isn't prime, removing the below class
                box4.classList.remove("prime-number-background");  
            }
            // checking for divisibility by 3 and 5  
            if(counter % 3 === 0 && counter % 5 === 0){
                // adding below classes defined in css
                box1.classList.add("divisibility-background");
                box2.classList.add("divisibility-background");
            }
            
        }(); // Immediately invoked function
            
        // condition for counter to stop    
        if(counter === target){
            console.log(counter);
            gameOver = true;
            clearInterval(setIntervalId);  
        }     
        counter++;           
             }
        },1000);    
}    
                

         
           