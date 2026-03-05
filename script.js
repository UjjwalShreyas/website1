const PASSWORD = "2503";

function checkPassword() {

let entered = document.getElementById("password").value;

if (entered === PASSWORD) {

sessionStorage.setItem("authenticated","true");
window.location.href = "gallery.html";

} else {

document.getElementById("error").innerText = "Try again Dumbass!";

}

}

/* Protect gallery page */

if(window.location.pathname.includes("gallery.html")){

if(sessionStorage.getItem("authenticated") !== "true"){

window.location.href = "index.html";

}

}


/* Slideshow */

let slideIndex = 0;

function showSlides(){

let slides = document.querySelectorAll(".slide");

slides.forEach(slide => slide.style.display="none");

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}

window.onload = function(){
showSlides();
};