let newX = 0, newY = 0, startX = 0 ,startY = 0;

const card = document.getElementById("siemsigroup")
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

const stick1 = document.getElementById("stick1")

const backdrop = document.getElementById("backdrop")

const card1 = document.getElementById("card1")

card.addEventListener('mousedown' , mouseDown)

window.onload = function(){
    
    stick1.style.visibility = "hidden"

    result.style.visibility = "hidden"
    result2.style.visibility = "hidden"
    result3.style.visibility = "hidden"
    result4.style.visibility = "hidden"
    result5.style.visibility = "hidden"
    result6.style.visibility = "hidden"
    result7.style.visibility = "hidden"
    result8.style.visibility = "hidden"
    result9.style.visibility = "hidden"
    result10.style.visibility = "hidden"
    result11.style.visibility = "hidden"
    result12.style.visibility = "hidden"
    result13.style.visibility = "hidden"
    result14.style.visibility = "hidden"
    result15.style.visibility = "hidden"
    result16.style.visibility = "hidden"
    result17.style.visibility = "hidden"
    result18.style.visibility = "hidden"
    result19.style.visibility = "hidden"
    result20.style.visibility = "hidden"
    result21.style.visibility = "hidden"
    result22.style.visibility = "hidden"
    result23.style.visibility = "hidden"
    result24.style.visibility = "hidden"
    result25.style.visibility = "hidden"
    result26.style.visibility = "hidden"
    result27.style.visibility = "hidden"
    result28.style.visibility = "hidden"
    result29.style.visibility = "hidden"    
    result30.style.visibility = "hidden"

    backdrop.style.visibility = "hidden";
    
    card1.style.visibility = "hidden";

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
const max = 1;
let randomNum;

let seconds = 0;
let timer = null;
let canMove = true;

card.addEventListener("touchstart", function(e){

    if (timer !== null) return; // Prevent duplicate timers

    seconds = 5;
    

    timer = setInterval(() => {
        seconds--;
                    if (seconds <= 0) {
                        
                    console.log("5 seconds reached!");
                    stopCounting();

                }
        console.log(seconds + " seconds");
    }, 1000);





    holdTimer = setTimeout(() => {
        console.log("Held for 5 second!");
        
        randomNum = Math.floor(Math.random() * max) + min;
        console.log(randomNum);

        const stick1ani = document.querySelector('#stick1');

        // const aniresult = document.querySelector('#result');

        if (randomNum == 1){

            card1.style.visibility = "visible";
            card1.classList.add('animatecardup');

            card1.addEventListener("animationend", () => {
                    
                    console.log("animationended")
                    
                    card1.classList.add('animatecardmove');    
            })


            
            stopMoving();
            // stick1.style.visibility = "visible"
            // stick1ani.classList.add('animatepopup');
            // const card1 = document.querySelector('#card1');

            // stick1ani.addEventListener("animationend", () => {
            //     // console.log("animationended")
                
            //     // backdrop.style.visibility = "visible"
            //     card1.style.visibility = "visible";
            //     card1.classList.add('animatecardup');
                
            //     card1.addEventListener("animationend", () => {
                    
            //         console.log("animationended")
                    
            //         card1.classList.add('animatecardmove');    
            //     }) 
            // }, {once:true});




            // result.style.visibility = "visible";
            // aniresult.classList.add('animate');

            // Put your action here

            

        }

    }, 5000);

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();

     offsetX = touch.clientX - rect.left;
     offsetY = touch.clientY - rect.top;

    console.log("Touch X:", offsetX);
    console.log("Touch Y:", offsetY);
    // console.log("Start")

});

function stopCounting() {
    clearInterval(timer);
    timer = null;
}

function stopMoving() {

    canMove = false;

}











card.addEventListener("touchmove", function (e) {
    e.preventDefault();

    const touch = e.touches[0];
    if (!canMove) return;
        card.style.left = (touch.clientX - offsetX) + "px";
        card.style.top  = (touch.clientY - offsetY) + "px";
        console.log("Moving...");
    // Your touch movement logic here
});
    
    
   




card.addEventListener("touchend", function (e) {


    console.log("Touch cancelled");
    // randomNum = Math.floor(Math.random() * max) + min;
    // console.log(randomNum);

    clearTimeout(holdTimer);
    stopCounting();
    
    const aniresult2 = document.querySelector('#result2');
    const aniresult3 = document.querySelector('#result3');
    const aniresult4 = document.querySelector('#result4');
    const aniresult5 = document.querySelector('#result5');
    const aniresult6 = document.querySelector('#result6');
    const aniresult7 = document.querySelector('#result7');
    const aniresult8 = document.querySelector('#result8');
    const aniresult9 = document.querySelector('#result9');
    const aniresult10 = document.querySelector('#result10');
    const aniresult11 = document.querySelector('#result11');
    const aniresult12 = document.querySelector('#result12');
    const aniresult13 = document.querySelector('#result13');
    const aniresult14 = document.querySelector('#result14');
    const aniresult15 = document.querySelector('#result15');
    const aniresult16 = document.querySelector('#result16');
    const aniresult17 = document.querySelector('#result17');
    const aniresult18 = document.querySelector('#result18');
    const aniresult19 = document.querySelector('#result19');
    const aniresult20 = document.querySelector('#result20');
    const aniresult21 = document.querySelector('#result21');
    const aniresult22 = document.querySelector('#result22');
    const aniresult23 = document.querySelector('#result23');
    const aniresult24 = document.querySelector('#result24');
    const aniresult25 = document.querySelector('#result25');
    const aniresult26 = document.querySelector('#result26');
    const aniresult27 = document.querySelector('#result27');
    const aniresult28 = document.querySelector('#result28');
    const aniresult29 = document.querySelector('#result29');
    const aniresult30 = document.querySelector('#result30');
    
    

    
    if (randomNum == 2){
        result2.style.visibility = "visible";
        aniresult2.classList.add('animate');

        aniresult2.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 3){
        result3.style.visibility = "visible";
        aniresult3.classList.add('animate');

        aniresult3.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 4){
        result4.style.visibility = "visible";
        aniresult4.classList.add('animate');

        aniresult4.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 5){
        result5.style.visibility = "visible";
        aniresult5.classList.add('animate');

        aniresult5.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 6){
        result6.style.visibility = "visible";
        aniresult6.classList.add('animate');

        aniresult6.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 7){
        result7.style.visibility = "visible";
        aniresult7.classList.add('animate');

        aniresult7.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 8){
        result8.style.visibility = "visible";
        aniresult8.classList.add('animate');

        aniresult8.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 9){
        result9.style.visibility = "visible";
        aniresult9.classList.add('animate');

        aniresult9.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 10){
        result10.style.visibility = "visible";
        aniresult10.classList.add('animate');

        aniresult10.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 11){
        result11.style.visibility = "visible";
        aniresult11.classList.add('animate');

        aniresult11.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 12){
        result12.style.visibility = "visible";
        aniresult12.classList.add('animate');

        aniresult12.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 13){
        result12.style.visibility = "visible";
        aniresult13.classList.add('animate');

        aniresult13.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 14){
        result14.style.visibility = "visible";
        aniresult14.classList.add('animate');

        aniresult14.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 15){
        result15.style.visibility = "visible";
        aniresult15.classList.add('animate');

        aniresult15.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 16){
        result16.style.visibility = "visible";
        aniresult16.classList.add('animate');

        aniresult16.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 17){
        result17.style.visibility = "visible";
        aniresult17.classList.add('animate');

        aniresult17.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 18){
        result18.style.visibility = "visible";
        aniresult18.classList.add('animate');

        aniresult18.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 19){
        result19.style.visibility = "visible";
        aniresult19.classList.add('animate');

        aniresult19.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 20){
        result20.style.visibility = "visible";
        aniresult20.classList.add('animate');

        aniresult20.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 21){
        result21.style.visibility = "visible";
        aniresult21.classList.add('animate');

        aniresult21.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 22){
        result22.style.visibility = "visible";
        aniresult22.classList.add('animate');

        aniresult22.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 23){
        result23.style.visibility = "visible";
        aniresult23.classList.add('animate');

        aniresult23.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 24){
        result24.style.visibility = "visible";
        aniresult24.classList.add('animate');

        aniresult24.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 25){
        result25.style.visibility = "visible";
        aniresult25.classList.add('animate');

        aniresult25.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 26){
        result26.style.visibility = "visible";
        aniresult26.classList.add('animate');

        aniresult26.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 27){
        result27.style.visibility = "visible";
        aniresult27.classList.add('animate');

        aniresult27.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 28){
        result28.style.visibility = "visible";
        aniresult28.classList.add('animate');

        aniresult28.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 29){
        result29.style.visibility = "visible";
        aniresult29.classList.add('animate');

        aniresult29.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }
    if (randomNum == 30){
        result30.style.visibility = "visible";
        aniresult30.classList.add('animate');

        aniresult30.addEventListener("animationend", () => {
            console.log("animationended")
            backdrop.style.visibility = "visible"
            card1.classList.add('animateslidein');
            
        }, {once:true});
    }

});



   
   














