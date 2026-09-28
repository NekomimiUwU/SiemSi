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

card.addEventListener('touchstart' , touchStart)


function touchStart(e){

    startY = e.clientY
    startX = e.clientX

    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', touchEnd)

    console.log("Start")
}

function touchMove(e){

   card.addEventListener('touchmove', function(e){

        
        var touchlocation = e.targetTouches[0];
        newX = startX -e.clientX
        newY = startY -e.clientY

        startX = e.clientX
        startY = e.clientY

        // card.style.top = (card.offsetTop - newY) +'px'
        // card.style.left = (card.offsetLeft - newX) + 'px'

        console.log("Move")



       

        card.style.left = touchlocation.pageX + 'px';
        card.style.top = touchlocation.pageY + 'px';

        e.preventDefault();
        
    })

    //  card.addEventListener('touchend', function(e){
    //     var x = parseInt(card.style.left);
    //     var y = parseInt(card.style.top);

        // if (x < 388 || x > 646) {
        //     card.style.left = '450px';
        //     card.style.top = '175px';
        // }

        // if (y < 100 || y > 356) {
        //     card.style.left = '450px';
        //     card.style.top = '175px';
        // }

    }



function touchEnd(e){
    document.removeEventListener('touchmove', touchMove)
    console.log("End")
}

    
   












// const mybutton = document.getElementById("testbutton");
// const mylabel = document.getElementById("numbergen");

// const min = 1;
// const max = 30;
// let randomNum;

// mybutton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     mylabel.textContent = randomNum;
// }