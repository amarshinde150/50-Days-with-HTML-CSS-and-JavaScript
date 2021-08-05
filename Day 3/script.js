let container = document.getElementById("mainContainer");
let search = document.getElementById("search");
let input = document.getElementById("input");
search.addEventListener("click",()=>{
    console.log(container.classList);
    container.classList.toggle("active");
    input.focus();
})