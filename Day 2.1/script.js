let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");
// console.log(circles)
let current_pointer = 1;

next.addEventListener('click',()=>{
    current_pointer++;
    // console.log("c",current_pointer);
    if(current_pointer>=circles.length){
        current_pointer=circles.length;
        next.classList.add("disabled");
    }
    updateProgress();
    update();
});
prev.addEventListener('click',()=>{
    current_pointer--;
    // console.log("c",current_pointer);
    if(current_pointer<1){
        current_pointer=1;
        prev.classList.add("disabled");
    }
    updateProgress();
    update();
});
function updateProgress(){
    progress.style.width = (100/3)*(current_pointer-1) + "%";
}
function update(){
    circles.forEach((circle,index)=>{
        if(index<current_pointer){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });
    if(current_pointer>1 && current_pointer<4){
        prev.classList.remove("disabled");
        next.classList.remove("disabled");
    }
    else if(current_pointer<=1){
        prev.classList.add("disabled");
        next.classList.remove("disabled");
    }
    else if(current_pointer>=4){
        next.classList.add("disabled");
        prev.classList.remove("disabled");
    }
}