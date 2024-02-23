var animationElements = document.querySelectorAll('.show-on-scroll')
function checkElInWindow(element){
    var rectEl = element.getBoundingClientRect();
    console.log(rectEl);
    var heightScreen =window.innerHeight
    if(!(rectEl.bottom<0||rectEl.top>heightScreen))
        element.classList.add('start')
    else
        element.classList.remove('start')
}
function checkAnimation(){
    animationElements.forEach(el=>{
       checkElInWindow(el)
    })
}
window.addEventListener('scroll',checkAnimation)


