const countval = document.querySelector(".countval")
const box = document.querySelector(".box")
const button_show = document.querySelector(".button_show")
var count = 0

function inc(){
    ++count
    countval.innerHTML = count
}
function reset(){
    count = 0
    countval.innerHTML = 0
}

function dec(){
    --count
    countval.innerHTML = count
}

function hideshow(){
    box.classList.add("hide")
    button_show.classList.remove("hide")
}

function showcounter(){
    box.classList.remove("hide")
    button_show.classList.add("hide")
}
