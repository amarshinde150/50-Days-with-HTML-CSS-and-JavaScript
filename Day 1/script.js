let panels = document.querySelectorAll('.card')
console.log(panels)
panels.forEach(function f(panel){
    panel.addEventListener('click',function z(){
        removeActiveClass();
        panel.classList.add('active');
    });

});

function removeActiveClass(){
    panels.forEach(function f(panel){
        panel.classList.remove('active');
    });
}