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
const stick10 = document.getElementById("stick10")
const stick11 = document.getElementById("stick11")
const stick12 = document.getElementById("stick12")
const stick13 = document.getElementById("stick13")
const stick14 = document.getElementById("stick14")
const stick15 = document.getElementById("stick15")
const stick16 = document.getElementById("stick16")
const stick17 = document.getElementById("stick17")
const stick18 = document.getElementById("stick18")
const stick19 = document.getElementById("stick19")
const stick20 = document.getElementById("stick20")
const stick21 = document.getElementById("stick21")
const stick22 = document.getElementById("stick22")
const stick23 = document.getElementById("stick23")
const stick24 = document.getElementById("stick24")
const stick25 = document.getElementById("stick25")
const stick26 = document.getElementById("stick26")
const stick27 = document.getElementById("stick27")
const stick28 = document.getElementById("stick28")
const stick29 = document.getElementById("stick29")
const stick30 = document.getElementById("stick30")

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")
const card6 = document.getElementById("card6")
const card7 = document.getElementById("card7")
const card8 = document.getElementById("card8")
const card9 = document.getElementById("card9")
const card10 = document.getElementById("card10")
const card11 = document.getElementById("card11")
const card12 = document.getElementById("card12")
const card13 = document.getElementById("card13")
const card14 = document.getElementById("card14")
const card15 = document.getElementById("card15")
const card16 = document.getElementById("card16")
const card17 = document.getElementById("card17")
const card18 = document.getElementById("card18")
const card19 = document.getElementById("card19")
const card20 = document.getElementById("card20")
const card21 = document.getElementById("card21")
const card22 = document.getElementById("card22")
const card23 = document.getElementById("card23")
const card24 = document.getElementById("card24")
const card25 = document.getElementById("card25")
const card26 = document.getElementById("card26")
const card27 = document.getElementById("card27")
const card28 = document.getElementById("card28")
const card29 = document.getElementById("card29")
const card30 = document.getElementById("card30")

const sound = new Audio("bell.mp3");

window.onload = function(){ //โหลดเข้าหน้าแรก 

    playbellsound();

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
    card10.style.visibility = "hidden"
    card11.style.visibility = "hidden"
    card12.style.visibility = "hidden"
    card13.style.visibility = "hidden"
    card14.style.visibility = "hidden"
    card15.style.visibility = "hidden"
    card16.style.visibility = "hidden"
    card17.style.visibility = "hidden"
    card18.style.visibility = "hidden"
    card19.style.visibility = "hidden"
    card20.style.visibility = "hidden"
    card21.style.visibility = "hidden"
    card22.style.visibility = "hidden"
    card23.style.visibility = "hidden"
    card24.style.visibility = "hidden"
    card25.style.visibility = "hidden"
    card26.style.visibility = "hidden"
    card27.style.visibility = "hidden"
    card28.style.visibility = "hidden"
    card29.style.visibility = "hidden"
    card30.style.visibility = "hidden"

    stick1.style.visibility = "hidden"
    stick2.style.visibility = "hidden"
    stick3.style.visibility = "hidden"
    stick4.style.visibility = "hidden"
    stick5.style.visibility = "hidden"
    stick6.style.visibility = "hidden"
    stick7.style.visibility = "hidden"
    stick8.style.visibility = "hidden"
    stick9.style.visibility = "hidden"
    stick10.style.visibility = "hidden"
    stick11.style.visibility = "hidden"
    stick12.style.visibility = "hidden"
    stick13.style.visibility = "hidden"
    stick14.style.visibility = "hidden"
    stick15.style.visibility = "hidden"
    stick16.style.visibility = "hidden"
    stick17.style.visibility = "hidden"
    stick18.style.visibility = "hidden"
    stick19.style.visibility = "hidden"
    stick20.style.visibility = "hidden"
    stick21.style.visibility = "hidden"
    stick22.style.visibility = "hidden"
    stick23.style.visibility = "hidden"
    stick24.style.visibility = "hidden"
    stick25.style.visibility = "hidden"
    stick26.style.visibility = "hidden"
    stick27.style.visibility = "hidden"
    stick28.style.visibility = "hidden"
    stick29.style.visibility = "hidden"
    stick30.style.visibility = "hidden"

    backdrop.style.visibility = "hidden";
    
    

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
    sound.volume = 0.4;
    sound.currentTime = 0;
    sound.play();
}


const startbutton = document.getElementById("playbutton");

startbutton.addEventListener("click", toggleMenuOn);

function toggleMenuOn() {
    locker.style.visibility = "visible"
    card.style.visibility = "visible"
    gamecover.style.visibility = "hidden"
    console.log("button clicked") 
}

const returnbutton = document.getElementById("returnbutton");
returnbutton.addEventListener("click", toggleReturnMenu);
function toggleReturnMenu(){
    location.reload(); //สามารถต่อฟังชั่นกลับสู่หน้าหลักได้ตรงนี้
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
            card10.style.visibility = "hidden"
            card11.style.visibility = "hidden"
            card12.style.visibility = "hidden"
            card13.style.visibility = "hidden"
            card14.style.visibility = "hidden"
            card15.style.visibility = "hidden"
            card16.style.visibility = "hidden"
            card17.style.visibility = "hidden"
            card18.style.visibility = "hidden"
            card19.style.visibility = "hidden"
            card20.style.visibility = "hidden"
            card21.style.visibility = "hidden"
            card22.style.visibility = "hidden"
            card23.style.visibility = "hidden"
            card24.style.visibility = "hidden"
            card25.style.visibility = "hidden"
            card26.style.visibility = "hidden"
            card27.style.visibility = "hidden"
            card28.style.visibility = "hidden"
            card29.style.visibility = "hidden"
            card30.style.visibility = "hidden"

            stick1.style.visibility = "hidden"
            stick2.style.visibility = "hidden"
            stick3.style.visibility = "hidden"
            stick4.style.visibility = "hidden"
            stick5.style.visibility = "hidden"
            stick6.style.visibility = "hidden"
            stick7.style.visibility = "hidden"
            stick8.style.visibility = "hidden"
            stick9.style.visibility = "hidden"
            stick10.style.visibility = "hidden"
            stick11.style.visibility = "hidden"
            stick12.style.visibility = "hidden"
            stick13.style.visibility = "hidden"
            stick14.style.visibility = "hidden"
            stick15.style.visibility = "hidden"
            stick16.style.visibility = "hidden"
            stick17.style.visibility = "hidden"
            stick18.style.visibility = "hidden"
            stick19.style.visibility = "hidden"
            stick20.style.visibility = "hidden"
            stick21.style.visibility = "hidden"
            stick22.style.visibility = "hidden"
            stick23.style.visibility = "hidden"
            stick24.style.visibility = "hidden"
            stick25.style.visibility = "hidden"
            stick26.style.visibility = "hidden"
            stick27.style.visibility = "hidden"
            stick28.style.visibility = "hidden"
            stick29.style.visibility = "hidden"
            stick30.style.visibility = "hidden"
            
            

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
        const stick10ani = document.querySelector('#stick10');
        const stick11ani = document.querySelector('#stick11');
        const stick12ani = document.querySelector('#stick12');
        const stick13ani = document.querySelector('#stick13');
        const stick14ani = document.querySelector('#stick14');
        const stick15ani = document.querySelector('#stick15');
        const stick16ani = document.querySelector('#stick16');
        const stick17ani = document.querySelector('#stick17');
        const stick18ani = document.querySelector('#stick18');
        const stick19ani = document.querySelector('#stick19');
        const stick20ani = document.querySelector('#stick20');
        const stick21ani = document.querySelector('#stick21');
        const stick22ani = document.querySelector('#stick22');
        const stick23ani = document.querySelector('#stick23');
        const stick24ani = document.querySelector('#stick24');
        const stick25ani = document.querySelector('#stick25');
        const stick26ani = document.querySelector('#stick26');
        const stick27ani = document.querySelector('#stick27');
        const stick28ani = document.querySelector('#stick28');
        const stick29ani = document.querySelector('#stick29');
        const stick30ani = document.querySelector('#stick30');


        if (randomNum == 1){ //ออกใบที่ 1

            stopMoving();
            stick1.style.visibility = "visible"
            stick1ani.classList.add('animatepopup');
            const card1 = document.querySelector('#card1');

            stick1ani.addEventListener("animationend", () => {
                
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card1.style.visibility = "visible";
                    card1.classList.add('dissolve');
                    
                    card1.addEventListener("animationend", () => {
                    
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
            stick2ani.classList.add('animatepopup');
            const card2 = document.querySelector('#card2');

            stick2ani.addEventListener("animationend", () => {
                            
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card2.style.visibility = "visible";
                    card2.classList.add('dissolve');
                    
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
            stick3ani.classList.add('animatepopup');
            const card3 = document.querySelector('#card3');

            stick3ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card3.style.visibility = "visible";
                    card3.classList.add('dissolve');
                    
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
            stick4ani.classList.add('animatepopup');
            const card4 = document.querySelector('#card4');

            stick4ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card4.style.visibility = "visible";
                    card4.classList.add('dissolve');
                    
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
            stick5ani.classList.add('animatepopup');
            const card5 = document.querySelector('#card5');

            stick5ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card5.style.visibility = "visible";
                    card5.classList.add('dissolve');
                    
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
            stick6ani.classList.add('animatepopup');
            const card6 = document.querySelector('#card6');

            stick6ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card6.style.visibility = "visible";
                    card6.classList.add('dissolve');
                    
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
            stick7ani.classList.add('animatepopup');
            const card7 = document.querySelector('#card7');

            stick7ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card7.style.visibility = "visible";
                    card7.classList.add('dissolve');
                    
                    card7.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card7.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 8){ //ออกใบที่ 7

            stopMoving();
            stick8.style.visibility = "visible"
            stick8ani.classList.add('animatepopup');
            const card8 = document.querySelector('#card8');

            stick8ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card8.style.visibility = "visible";
                    card8.classList.add('dissolve');
                    
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
            stick9ani.classList.add('animatepopup');
            const card9 = document.querySelector('#card9');

            stick9ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card9.style.visibility = "visible";
                    card9.classList.add('dissolve');
                    
                    card9.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card9.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 10){ //ออกใบที่ 10

            stopMoving();
            stick10.style.visibility = "visible"
            stick10ani.classList.add('animatepopup');
            const card10 = document.querySelector('#card10');

            stick10ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card10.style.visibility = "visible";
                    card10.classList.add('dissolve');
                    
                    card10.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card10.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 11){ //ออกใบที่ 11

            stopMoving();
            stick11.style.visibility = "visible"
            stick11ani.classList.add('animatepopup');
            const card11 = document.querySelector('#card11');

            stick11ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card11.style.visibility = "visible";
                    card11.classList.add('dissolve');
                    
                    card11.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card11.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 12){ //ออกใบที่ 12

            stopMoving();
            stick12.style.visibility = "visible"
            stick12ani.classList.add('animatepopup');
            const card12 = document.querySelector('#card12');

            stick12ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card12.style.visibility = "visible";
                    card12.classList.add('dissolve');
                    
                    card12.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card12.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 13){ //ออกใบที่ 13

            stopMoving();
            stick13.style.visibility = "visible"
            stick13ani.classList.add('animatepopup');
            const card13 = document.querySelector('#card13');

            stick13ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card13.style.visibility = "visible";
                    card13.classList.add('dissolve');
                    
                    card13.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card13.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 14){ //ออกใบที่ 14

            stopMoving();
            stick14.style.visibility = "visible"
            stick14ani.classList.add('animatepopup');
            const card14 = document.querySelector('#card14');

            stick14ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card14.style.visibility = "visible";
                    card14.classList.add('dissolve');
                    
                    card14.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card14.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 15){ //ออกใบที่ 15

            stopMoving();
            stick15.style.visibility = "visible"
            stick15ani.classList.add('animatepopup');
            const card15 = document.querySelector('#card15');

            stick15ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card15.style.visibility = "visible";
                    card15.classList.add('dissolve');
                    
                    card15.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card15.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 16){ //ออกใบที่ 16

            stopMoving();
            stick16.style.visibility = "visible"
            stick16ani.classList.add('animatepopup');
            const card16 = document.querySelector('#card16');

            stick16ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card16.style.visibility = "visible";
                    card16.classList.add('dissolve');
                    
                    card16.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card16.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 17){ //ออกใบที่ 17

            stopMoving();
            stick17.style.visibility = "visible"
            stick17ani.classList.add('animatepopup');
            const card17 = document.querySelector('#card17');

            stick17ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card17.style.visibility = "visible";
                    card17.classList.add('dissolve');
                    
                    card17.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card17.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 18){ //ออกใบที่ 18

            stopMoving();
            stick18.style.visibility = "visible"
            stick18ani.classList.add('animatepopup');
            const card18 = document.querySelector('#card18');

            stick18ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card18.style.visibility = "visible";
                    card18.classList.add('dissolve');
                    
                    card18.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card18.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 19){ //ออกใบที่ 19

            stopMoving();
            stick19.style.visibility = "visible"
            stick19ani.classList.add('animatepopup');
            const card19 = document.querySelector('#card19');

            stick19ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card19.style.visibility = "visible";
                    card19.classList.add('dissolve');
                    
                    card19.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card19.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 20){ //ออกใบที่ 20

            stopMoving();
            stick20.style.visibility = "visible"
            stick20ani.classList.add('animatepopup');
            const card20 = document.querySelector('#card20');

            stick20ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card20.style.visibility = "visible";
                    card20.classList.add('dissolve');
                    
                    card20.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card20.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 21){ //ออกใบที่ 21

            stopMoving();
            stick21.style.visibility = "visible"
            stick21ani.classList.add('animatepopup');
            const card21 = document.querySelector('#card21');

            stick21ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card21.style.visibility = "visible";
                    card21.classList.add('dissolve');
                    
                    card21.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card21.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 22){ //ออกใบที่ 22

            stopMoving();
            stick22.style.visibility = "visible"
            stick22ani.classList.add('animatepopup');
            const card22 = document.querySelector('#card22');

            stick22ani.addEventListener("animationend", () => {
                            
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card22.style.visibility = "visible";
                    card22.classList.add('dissolve');
                    
                    card22.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card22.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 23){ //ออกใบที่ 3

            stopMoving();
            stick23.style.visibility = "visible"
            stick23ani.classList.add('animatepopup');
            const card23 = document.querySelector('#card23');

            stick23ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card23.style.visibility = "visible";
                    card23.classList.add('dissolve');
                    
                    card23.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card23.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }

        if (randomNum == 24){ //ออกใบที่ 24

            stopMoving();
            stick24.style.visibility = "visible"
            stick24ani.classList.add('animatepopup');
            const card24 = document.querySelector('#card24');

            stick24ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card24.style.visibility = "visible";
                    card24.classList.add('dissolve');
                    
                    card24.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card24.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }

        if (randomNum == 25){ //ออกใบที่ 25

            stopMoving();
            stick25.style.visibility = "visible"
            stick25ani.classList.add('animatepopup');
            const card25 = document.querySelector('#card25');

            stick25ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card25.style.visibility = "visible";
                    card25.classList.add('dissolve');
                    
                    card25.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card25.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000);
            }, {once:true});

        }
        if (randomNum == 26){ //ออกใบที่ 26

            stopMoving();
            stick26.style.visibility = "visible"
            stick26ani.classList.add('animatepopup');
            const card26 = document.querySelector('#card26');

            stick26ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card26.style.visibility = "visible";
                    card26.classList.add('dissolve');
                    
                    card26.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card26.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 27){ //ออกใบที่ 7

            stopMoving();
            stick27.style.visibility = "visible"
            stick27ani.classList.add('animatepopup');
            const card27 = document.querySelector('#card27');

            stick27ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card27.style.visibility = "visible";
                    card27.classList.add('dissolve');
                    
                    card27.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card27.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 28){ //ออกใบที่ 7

            stopMoving();
            stick28.style.visibility = "visible"
            stick28ani.classList.add('animatepopup');
            const card28 = document.querySelector('#card28');

            stick28ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card28.style.visibility = "visible";
                    card28.classList.add('dissolve');
                    
                    card28.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card28.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 29){ //ออกใบที่ 29

            stopMoving();
            stick29.style.visibility = "visible"
            stick29ani.classList.add('animatepopup');
            const card29 = document.querySelector('#card29');

            stick29ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card29.style.visibility = "visible";
                    card29.classList.add('dissolve');
                    
                    card29.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card29.addEventListener ("animationend", () => {

                        })
                    })
                }, 2000); 
            }, {once:true});

        }

        if (randomNum == 30){ //ออกใบที่ 30

            stopMoving();
            stick30.style.visibility = "visible"
            stick30ani.classList.add('animatepopup');
            const card30 = document.querySelector('#card30');

            stick30ani.addEventListener("animationend", () => {               
                holdTimer = setTimeout(() => {
                    backdrop.style.visibility = "visible"
                    card30.style.visibility = "visible";
                    card30.classList.add('dissolve');
                    
                    card30.addEventListener("animationend", () => {
                    
                        continuebutton.style.visibility = "visible"
                        
                        card30.addEventListener ("animationend", () => {

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

    const touch = e.touches[0];
    if (!canMove) return;
        card.style.left = (touch.clientX - offsetX) + "px";
        card.style.top  = (touch.clientY - offsetY) + "px";
        // console.log("Moving...");
    
});
    
    
   




card.addEventListener("touchend", function (e) {


    console.log("Touch cancelled");

    // randomNum = Math.floor(Math.random() * max) + min;
    // console.log(randomNum);

    clearTimeout(holdTimer);
    stopCounting();

});



   
   














