let navOpen = document.getElementById("nav-open");
let navClose = document.getElementById("nav-close");
let overlay = document.getElementById("overlay").classList;
let nav = document.getElementById("mainnav").classList

navOpen.addEventListener("click", ToggleNav);
navClose.addEventListener("click", ToggleNav);

function ToggleNav(){
    overlay.toggle("hidden");
    nav.toggle("hidden");

}

let dropdowns = document.getElementsByClassName("dropdown");

for(var i=0; i < dropdowns.length; i++){
    dropdowns[i].addEventListener("click", ToggleDropdown);
}

function ToggleDropdown(e){
    let dropdown = e.srcElement.nextElementSibling.classList;
    
    for(var i=0; i < dropdowns.length; i++){
        if(e.srcElement != dropdowns[i]){
            dropdowns[i].classList.remove("active");
            dropdowns[i].nextElementSibling.classList.add("hidden")
        }
    }
    e.srcElement.classList.toggle("active");
    dropdown.toggle("hidden");
}