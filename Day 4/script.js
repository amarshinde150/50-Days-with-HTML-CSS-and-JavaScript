let image = document.getElementById('Image');
let text = document.getElementById("text");

let interval = setInterval(timefunc,30);
let load=0;
function timefunc(){
    load++;
    if(load>=100){
        clearInterval(interval);
    }
    text.innerText = `${load}%`;
    image.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    text.style.opacity = `${scale(load,0,100,1,0)}`
}

let scale = (load,in_min,in_max,out_min,out_max)=> {
    return ((out_max-out_min)/(in_max-in_min)*(load-in_min) + out_min);
}