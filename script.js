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










const mybutton = document.getElementById("testbutton");
const mylabel = document.getElementById("numbergen");

const min = 1;
const max = 30;
let randomNum;

mybutton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomNum;
}