let newX = 0, newY = 0, startX = 0 ,startY = 0;

const card = document.getElementById("siemsigroup")



const cardcontainer =document.getElementById("cardcontainer")
const gamecover = document.getElementById("gamecover")
const backdrop = document.getElementById("backdrop")
const locker = document.getElementById("lockercontainer")
const returngroup = document.getElementById("returndiv")
const continuebutton = document.getElementById("continuebutton")


const stick1 = document.getElementById("stick1")
const stick2 = document.getElementById("stick2")
const stick3 = document.getElementById("stick3")
const stick4 = document.getElementById("stick4")
const stick5 = document.getElementById("stick5")
const stick6 = document.getElementById("stick6")
const stick7 = document.getElementById("stick7")
const stick8 = document.getElementById("stick8")
const stick9 = document.getElementById("stick9")


const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")
const card6 = document.getElementById("card6")
const card7 = document.getElementById("card7")
const card8 = document.getElementById("card8")
const card9 = document.getElementById("card9")


const bellsound = new Audio("Chinesebell.mp3")
const flippaper = new Audio("flippaper.mp3")
const clicksound = new Audio("click.mp3")
const siemsisound = new Audio("stickhit.mp3")
const stickdrop = new Audio("stickdrop.mp3")

window.onload = function(){ //โหลดเข้าหน้าแรก 

    

    locker.style.visibility = "hidden"
    returngroup.style.visibility = "hidden"
    // gamecover.style.visibility ="hidden"
    continuebutton.style.visibility = "hidden"
    card.style.visibility = "hidden" 

    card1.style.visibility = "hidden"
    card2.style.visibility = "hidden"
    card3.style.visibility = "hidden"
    card4.style.visibility = "hidden"
    card5.style.visibility = "hidden"
    card6.style.visibility = "hidden"
    card7.style.visibility = "hidden"
    card8.style.visibility = "hidden"
    card9.style.visibility = "hidden"
    

    stick1.style.visibility = "hidden"
    stick2.style.visibility = "hidden"
    stick3.style.visibility = "hidden"
    stick4.style.visibility = "hidden"
    stick5.style.visibility = "hidden"
    stick6.style.visibility = "hidden"
    stick7.style.visibility = "hidden"
    stick8.style.visibility = "hidden"
    stick9.style.visibility = "hidden"

    backdrop.style.visibility = "hidden";
    
    // playbellsound();

}

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

function playbellsound(){

    
        bellsound.volume = 1;
        bellsound.currentTime= 0;
        bellsound.play();
    
}

function fadeOut(audio, duration = 1000) {
    const interval = 50;
    const steps = duration / interval;
    const volumeStep = audio.volume / steps;

    const fadeInterval = setInterval(() => {
        audio.volume = Math.max(0, audio.volume - volumeStep);

        if (audio.volume <= 0) {
            clearInterval(fadeInterval);
            audio.pause();
            audio.currentTime = 0;
        }
    }, interval);
}

function playstickdropsound(){
    stickdrop.volume = 1;
    stickdrop.currentTime = 0;
    stickdrop.play();
}

function playsiemsisound(){
    siemsisound.volume = 1;
    siemsisound.currentTime = 0;
    siemsisound.play()
}


const startbutton = document.getElementById("playbutton");

startbutton.addEventListener("click", toggleMenuOn);

function toggleMenuOn() {

    playbellsound();

    holdTimer = setTimeout(() => {
        locker.style.visibility = "visible"
        card.style.visibility = "visible"
        gamecover.style.visibility = "hidden"
    }, 1000);

    fadeOut(bellsound, 4000); // Fade out over 1 second


    // console.log("button clicked") 
}

const returnbutton = document.getElementById("returnbutton");
returnbutton.addEventListener("click", toggleReturnMenu);
function toggleReturnMenu(){
    clicksound.currentTime= 0;
    clicksound.play();
    holdTimer = setTimeout(() => {
        location.reload(); //สามารถต่อฟังชั่นกลับสู่หน้าหลักได้ตรงนี้
    }, 500);
    
}

continuebutton.addEventListener("click", togglecontinuebutton);
function togglecontinuebutton(){
    console.log("ไปหน้าขอบคุณ")
        console.log("แสดงผลการ์ดจบแล้ว")

        const returngroup = document.querySelector('#returndiv');
        returngroup.classList.add('dissolve');

            card.style.visibility = "hidden"
            locker.style.visibility = "hidden"
            returngroup.style.visibility = "visible"
            continuebutton.style.visibility = "hidden"

            card1.style.visibility = "hidden"
            card2.style.visibility = "hidden"
            card3.style.visibility = "hidden"
            card4.style.visibility = "hidden"
            card5.style.visibility = "hidden"
            card6.style.visibility = "hidden"
            card7.style.visibility = "hidden"
            card8.style.visibility = "hidden"
            card9.style.visibility = "hidden"
            

            stick1.style.visibility = "hidden"
            stick2.style.visibility = "hidden"
            stick3.style.visibility = "hidden"
            stick4.style.visibility = "hidden"
            stick5.style.visibility = "hidden"
            stick6.style.visibility = "hidden"
            stick7.style.visibility = "hidden"
            stick8.style.visibility = "hidden"
            stick9.style.visibility = "hidden"
            
            
            
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

    seconds = 2;
    

    timer = setInterval(() => {
        seconds--;
            
        console.log(seconds + " seconds"); 
                    if (seconds <= 0) {
                       
                    console.log("2 seconds reached!");
                    stopCounting();

                }
        
    }, 1000);





    holdTimer = setTimeout(() => {

        console.log("Held for 2 second!");
        
        randomNum = Math.floor(Math.random() * max) + min;
        console.log(randomNum);

        const stick1ani = document.querySelector('#stick1');
        const stick2ani = document.querySelector('#stick2');
        const stick3ani = document.querySelector('#stick3');
        const stick4ani = document.querySelector('#stick4');
        const stick5ani = document.querySelector('#stick5');
        const stick6ani = document.querySelector('#stick6');
        const stick7ani = document.querySelector('#stick7');
        const stick8ani = document.querySelector('#stick8');
        const stick9ani = document.querySelector('#stick9');
        


        if (randomNum == 1){ //ออกใบที่ 1

            stopMoving();
            stick1.style.visibility = "visible"
            playstickdropsound();
            stick1ani.classList.add('animatepopup');
            const card1 = document.querySelector('#card1');

            stick1ani.addEventListener("animationend", () => {
                
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card1.style.visibility = "visible";
                    card1.classList.add('dissolve');
                    playbellsound();

                    card1.addEventListener("animationend", () => {
                        fadeOut(bellsound, 2000); // Fade out over 1 second
                        continuebutton.style.visibility = "visible"
                        
                        card1.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
                 
            }, {once:true});

        }

        if (randomNum == 2){ //ออกใบที่ 2

            stopMoving();
            stick2.style.visibility = "visible"
            playstickdropsound();
            stick2ani.classList.add('animatepopup');
            const card2 = document.querySelector('#card2');

            stick2ani.addEventListener("animationend", () => {
                            
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card2.style.visibility = "visible";
                    card2.classList.add('dissolve');
                    playbellsound();
                    
                    card2.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card2.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 3){ //ออกใบที่ 3

            stopMoving();
            stick3.style.visibility = "visible"
            playstickdropsound();
            stick3ani.classList.add('animatepopup');
            const card3 = document.querySelector('#card3');

            stick3ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card3.style.visibility = "visible";
                    card3.classList.add('dissolve');
                    playbellsound();
                    card3.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card3.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }

        if (randomNum == 4){ //ออกใบที่ 4

            stopMoving();
            stick4.style.visibility = "visible"
            playstickdropsound();
            stick4ani.classList.add('animatepopup');
            const card4 = document.querySelector('#card4');

            stick4ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card4.style.visibility = "visible";
                    card4.classList.add('dissolve');
                    playbellsound();
                    card4.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card4.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }

        if (randomNum == 5){ //ออกใบที่ 5

            stopMoving();
            stick5.style.visibility = "visible"
            playstickdropsound();
            stick5ani.classList.add('animatepopup');
            const card5 = document.querySelector('#card5');

            stick5ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card5.style.visibility = "visible";
                    card5.classList.add('dissolve');
                    playbellsound();
                    card5.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card5.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }
        if (randomNum == 6){ //ออกใบที่ 6

            stopMoving();
            stick6.style.visibility = "visible"
            playstickdropsound();
            stick6ani.classList.add('animatepopup');
            const card6 = document.querySelector('#card6');

            stick6ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card6.style.visibility = "visible";
                    card6.classList.add('dissolve');
                    playbellsound();
                    card6.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card6.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 7){ //ออกใบที่ 7

            stopMoving();
            stick7.style.visibility = "visible"
            playstickdropsound();
            stick7ani.classList.add('animatepopup');
            const card7 = document.querySelector('#card7');

            stick7ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card7.style.visibility = "visible";
                    card7.classList.add('dissolve');
                    playbellsound();
                    card7.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card7.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 8){ //ออกใบที่ 8

            stopMoving();
            stick8.style.visibility = "visible"
            playstickdropsound();
            stick8ani.classList.add('animatepopup');
            const card8 = document.querySelector('#card8');

            stick8ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card8.style.visibility = "visible";
                    card8.classList.add('dissolve');
                    playbellsound();
                    card8.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card8.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 9){ //ออกใบที่ 9

            stopMoving();
            stick9.style.visibility = "visible"
            playstickdropsound();
            stick9ani.classList.add('animatepopup');
            const card9 = document.querySelector('#card9');

            stick9ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card9.style.visibility = "visible";
                    card9.classList.add('dissolve');
                    playbellsound();
                    card9.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card9.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        
    }, 2000);

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();

     offsetX = touch.clientX - rect.left;
     offsetY = touch.clientY - rect.top;

    console.log("Touch X:", offsetX);
    console.log("Touch Y:", offsetY);
    

});

function stopCounting() {
    clearInterval(timer);
    timer = null;
}

function stopMoving() {

    canMove = false;

}



card.addEventListener("touchmove", function (e) { // สำหรับขยับ Div ที่รองรับ
    e.preventDefault();
    siemsisound.volume = 0.3;
        
    siemsisound.play().catch(console.error);

    const touch = e.touches[0];
    if (!canMove) return;
        card.style.left = (touch.clientX - offsetX) + "px";
        card.style.top  = (touch.clientY - offsetY) + "px";
        console.log("Moving...");

        siemsisound.volume = 0.3;
        
        siemsisound.play().catch(console.error);
        
});
    
    
   




card.addEventListener("touchend", function (e) {


    console.log("Touch cancelled");

    // randomNum = Math.floor(Math.random() * max) + min;
    // console.log(randomNum);

    clearTimeout(holdTimer);
    stopCounting();

});



   
   














