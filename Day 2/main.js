let progress = document.getElementById("progressBar")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
// let circleClass = document.getElementsByClassName('circle')

let circles = document.querySelectorAll(".circle")

let activeCircle = 1;
next.addEventListener('click',()=>{
    circles.forEach((cls)=>{
        cls.style.transitionDelay = "0.2s"
    })
    activeCircle++;
    if (activeCircle > circles.length){
        activeCircle = circles.length
    }
    update();
})

prev.addEventListener('click',()=>{
    activeCircle--;
    circles.forEach((cls)=>{
        cls.style.transitionDelay = "0s"
    })
    if (activeCircle < 1){
        activeCircle = 1
    }
    update();
})

function update(){
    if(activeCircle == 1){
        prev.disabled = true;
    }
    else if(activeCircle == circles.length)
    {
        next.disabled = true;
    }
    else{
        prev.disabled = next.disabled =false;
    }
    circles.forEach((circle,index)=>{
        if(index < activeCircle)
        {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove("active")
        }
    })
    progress.style.width = ((activeCircle-1) / (circles.length-1))*100 + '%';
}

