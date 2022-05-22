let level = 0;
let sequence = [];
let humanSequence = [];

document.getElementById("greenBox").addEventListener("click", pressedFunctionGreen);
function pressedFunctionGreen(revertColor){
    //by initial doesn't equal to false
    if(revertColor===false)
    {
        document.getElementById("greenBox").classList.remove("boxClicked");  
        document.getElementById("greenBox").classList.add("green"); 
    }
    else
    {
        humanSequence.push("greenBox");
        compare();
        playSound("greenBox");
        document.getElementById("greenBox").classList.remove("green");  
        document.getElementById("greenBox").classList.add("boxClicked");      
        setTimeout(pressedFunctionGreen, 0.3,false);
    }
 
}

document.getElementById("redBox").addEventListener("click", pressedFunctionRed);

function pressedFunctionRed(revertColor){
    if(revertColor===false)
    {
        document.getElementById("redBox").classList.remove("boxClicked");  
        document.getElementById("redBox").classList.add("red"); 
    }
    else
    {
        humanSequence.push("redBox");
        compare();
        playSound("redBox");
        document.getElementById("redBox").classList.remove("red");  
        document.getElementById("redBox").classList.add("boxClicked");      
        setTimeout(pressedFunctionRed, 0.3,false);
    }     
}

document.getElementById("yellowBox").addEventListener("click", pressedFunctionYellow);

function pressedFunctionYellow(revertColor){
    if(revertColor===false)
    {
        document.getElementById("yellowBox").classList.remove("boxClicked");  
        document.getElementById("yellowBox").classList.add("yellow"); 
    }
    else
    {
        humanSequence.push("yellowBox");
        compare();
        playSound("yellowBox");
        document.getElementById("yellowBox").classList.remove("yellow");  
        document.getElementById("yellowBox").classList.add("boxClicked");      
        setTimeout(pressedFunctionYellow, 0.3,false);
    }         
}
document.getElementById("blueBox").addEventListener("click", pressedFunctionBlue);
function pressedFunctionBlue(revertColor){
    if(revertColor===false)
    {
        document.getElementById("blueBox").classList.remove("boxClicked");  
        document.getElementById("blueBox").classList.add("blue"); 
    }
    else
    {
        humanSequence.push("blueBox");
        compare();
        playSound("blueBox");
        document.getElementById("blueBox").classList.remove("blue");  
        document.getElementById("blueBox").classList.add("boxClicked");      
        setTimeout(pressedFunctionBlue, 0.3,false);
    }     
}

window.addEventListener("keydown",start);

function start()
{
    window.removeEventListener("keydown",start);
    document.body.style.backgroundColor = "rgb(4, 30, 65)";
    humanSequence = [];
    level = 0;
    sequence = [];
    nextRound();
}

function activateTile(color) {
    const tile = document.getElementById(color);
    
    tile.classList.add('activated');
    playSound(color);
  
    setTimeout(() => {
      tile.classList.remove('activated');
    }, 300);
  }
  

function nextRound() {
    humanSequence = [];
    level += 1;
    document.getElementById("div-text").innerHTML = "level "+ level;  
    
    var currentBox= nextStep();
    
    sequence.push(currentBox);
    setTimeout(() => { activateTile(currentBox) }, 700); //call function that hide the currentBox
    //playRound(sequence);

  }

  //return random value (id box)
function nextStep() {
    const tiles = ['greenBox', 'redBox', 'yellowBox', 'blueBox'];
    const random = tiles[Math.floor(Math.random() * 4)];
    return random;
  }

function compare(){
    var userColor= humanSequence[humanSequence.length-1];
    if(sequence[humanSequence.length-1]==userColor)
    {
        if(sequence.length==humanSequence.length)
            nextRound();
    }
    else
    {
        // wrong press from user then do ......
        document.getElementById("div-text").innerHTML = "Game Over, Press Any Key to Restart";
        document.body.style.backgroundColor = "red";
        var snd = new Audio("assets/sounds/wrong.mp3");
        snd.play();
        window.addEventListener("keydown",start);
    }
  }

  function playSound(box)
  {
      if(box==="greenBox")
      {
        var snd = new Audio("assets/sounds/green.mp3");
        snd.play();
      }
      else if(box==="redBox")
      {
        var snd = new Audio("assets/sounds/red.mp3");
        snd.play();
      }
      else if(box==="yellowBox")
      {
        var snd = new Audio("assets/sounds/yellow.mp3");
        snd.play();
      }
      else if(box==="blueBox")
      {
        var snd = new Audio("assets/sounds/blue.mp3");
        snd.play();
      }
  }

  