let boxs = document.querySelectorAll(".box");
let fun = ()=>{
    winheight = window.innerHeight/5*4;
    
    boxs.forEach(box=>{
        btop = (box.getBoundingClientRect().top)
        if(btop<winheight){
            box.classList.add("visible");
        }else{
            box.classList.remove("visible");
        }
    });
} 
window.addEventListener("scroll",fun);
fun();