//Async concepts used :- setInterval() and clearInterval() to trigger frequent occurrence of events 

//Generate a random color 
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    //hex codes are 6-digit alphanumeric representation of colors
    //These are based on RGB Model 

    let color = '#';
    for(let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
const startChangingColor = function() {
    if(intervalId == null) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId)
    console.log("Color changing STOPPED!");
    intervalId = null;
    //clear the memory for intervalId variable to dereference it from setInterval()
    //a bit of optimization 
    
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor); 
//add event listners to the start and stop buttons for change and stop change of colors 