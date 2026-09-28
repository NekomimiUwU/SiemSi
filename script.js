let newX = 0, newY = 0, startX = 0 ,startY = 0;

const card = document.getElementById("card")

card.addEventListener('mousedown' , mouseDown)

function mouseDown(e){
    startY = e.clientY
    startX = e.clientX

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX -e.clientX
    newY = startY -e.clientY

    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) +'px'
    card.style.left = (card.offsetLeft - newX) + 'px'

    console.log({newX , newY});
}

function mouseUp(e){
    document.removeEventListener("mousemove" , mouseMove)
}


//Mobile Version below

let offsetX = 0;
let offsetY = 0;




card.addEventListener("touchstart", function(e){

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();

     offsetX = touch.clientX - rect.left;
     offsetY = touch.clientY - rect.top;

    console.log("Touch X:", offsetX);
    console.log("Touch Y:", offsetY);
    // console.log("Start")
});

card.addEventListener("touchmove", function (e) {
    e.preventDefault();

    const touch = e.touches[0];

    card.style.left = (touch.clientX - offsetX) + "px";
    card.style.top  = (touch.clientY - offsetY) + "px";
   
});

card.addEventListener("touchend", function (e) {
    console.log("Touch cancelled");
});

    
   












// const mybutton = document.getElementById("testbutton");
// const mylabel = document.getElementById("numbergen");

// const min = 1;
// const max = 30;
// let randomNum;

// mybutton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     mylabel.textContent = randomNum;
// }