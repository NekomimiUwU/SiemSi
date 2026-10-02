let newX = 0, newY = 0, startX = 0 ,startY = 0;

const card = document.getElementById("card")
const result = document.getElementById("result")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const result4 = document.getElementById("result4")
const result5 = document.getElementById("result5")
const result6 = document.getElementById("result6")
const result7 = document.getElementById("result7")
const result8 = document.getElementById("result8")
const result9 = document.getElementById("result9")
const result10 = document.getElementById("result10")
const result11 = document.getElementById("result11")
const result12 = document.getElementById("result12")
const result13 = document.getElementById("result13")
const result14 = document.getElementById("result14")
const result15 = document.getElementById("result15")
const result16 = document.getElementById("result16")
const result17 = document.getElementById("result17")
const result18 = document.getElementById("result18")
const result19 = document.getElementById("result19")
const result20 = document.getElementById("result20")
const result21 = document.getElementById("result21")
const result22 = document.getElementById("result22")
const result23 = document.getElementById("result23")
const result24 = document.getElementById("result24")
const result25 = document.getElementById("result25")
const result26 = document.getElementById("result26")
const result27 = document.getElementById("result27")
const result28 = document.getElementById("result28")
const result29 = document.getElementById("result29")
const result30 = document.getElementById("result30")



card.addEventListener('mousedown' , mouseDown)

window.onload = function(){
    
    result.style.visibility = "hidden"
    result2.style.visibility = "hidden"
    
}

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

//random Number gen

const mybutton = document.getElementById("testbutton");
const mylabel = document.getElementById("numbergen");

const min = 1;
const max = 30;
let randomNum;


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
    randomNum = Math.floor(Math.random() * max) + min;
    console.log(randomNum);
    
    if (randomNum == 1){
        result.style.visibility = "visible";
    }
    if (randomNum == 2){
        result2.style.visibility = "visible";
    }
    if (randomNum == 3){
        result3.style.visibility = "visible";
    }
    if (randomNum == 4){
        result4.style.visibility = "visible";
    }
    if (randomNum == 5){
        result5.style.visibility = "visible";
    }
    if (randomNum == 6){
        result6.style.visibility = "visible";
    }
    if (randomNum == 7){
        result7.style.visibility = "visible";
    }
    if (randomNum == 8){
        result8.style.visibility = "visible";
    }
    if (randomNum == 9){
        result9.style.visibility = "visible";
    }
    if (randomNum == 10){
        result10.style.visibility = "visible";
    }
    if (randomNum == 11){
        result11.style.visibility = "visible";
    }
    if (randomNum == 12){
        result12.style.visibility = "visible";
    }
    if (randomNum == 13){
        result12.style.visibility = "visible";
    }
    if (randomNum == 14){
        result14.style.visibility = "visible";
    }
    if (randomNum == 15){
        result15.style.visibility = "visible";
    }
    if (randomNum == 16){
        result16.style.visibility = "visible";
    }
    if (randomNum == 17){
        result17.style.visibility = "visible";
    }
    if (randomNum == 18){
        result18.style.visibility = "visible";
    }
    if (randomNum == 19){
        result19.style.visibility = "visible";
    }
    if (randomNum == 20){
        result20.style.visibility = "visible";
    }
    if (randomNum == 21){
        result21.style.visibility = "visible";
    }
    if (randomNum == 22){
        result22.style.visibility = "visible";
    }
    if (randomNum == 23){
        result23.style.visibility = "visible";
    }
    if (randomNum == 24){
        result24.style.visibility = "visible";
    }
    if (randomNum == 25){
        result25.style.visibility = "visible";
    }
    if (randomNum == 26){
        result26.style.visibility = "visible";
    }
    if (randomNum == 27){
        result27.style.visibility = "visible";
    }
    if (randomNum == 28){
        result28.style.visibility = "visible";
    }
    if (randomNum == 29){
        result29.style.visibility = "visible";
    }
    if (randomNum == 30){
        result30.style.visibility = "visible";
    }

});



   
   














