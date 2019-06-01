
// VAN HOME NAAR ABOUT

let button = document.querySelector(".scrollen");

    button.addEventListener("click", function(event) {
       window.scroll({
          top: (window.innerHeight*this.getAttribute("data-factor")),
          left: 0,
          behavior: 'smooth'
       });
       event.preventDefault();
     }, false);

// NAVBAR

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".bigscreen").style.top = "0";
  } else {
    document.querySelector(".bigscreen").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
})

// HAMBURGER

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".smallscreen");
let myMain = document.querySelector("main");

function openMenu(){
  console.log("click");
  if(navMenu.style.display === "flex"){
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex"
  }
}

function hideMenu(){
  console.log("click");
  navMenu.style.display = "none";
}

hamburger.addEventListener("click", openMenu);
myMain.addEventListener("click", hideMenu);

// CAROUSEL

let positie = 0;
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");
let afb = document.querySelectorAll(".afbeeelding");

console.log(prevButton);

function slideImages(){
  console.log("Slideimages aangeroepen!");
  for (var i = 0; i < afb.length; i++) {
    afb[i].classList.add("onzichtbaar");
  }

  for (var i = 0; i < afb.length; i++) {
      if (i === positie){
        afb[i].classList.remove("onzichtbaar");
      }
  }
}

function prevImage(){
  console.log("prevImage aangeroepen!");
  if(positie > 0){
    positie--;
    slideImages();
  }
}

function nextImage(){
  console.log("nextImage aangeroepen!");
  if(positie < afb.length-1){
    positie++;
    slideImages();
  }
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
slideImages();

// CAROUSEL2

let positie2 = 0;
let prevButton2 = document.querySelector("#prevButton2");
let nextButton2 = document.querySelector("#nextButton2");
let afb2 = document.querySelectorAll(".afbeeelding2");

console.log(prevButton2);

function slideImages2(){
  console.log("Slideimages aangeroepen!");
  for (var i = 0; i < afb2.length; i++) {
    afb2[i].classList.add("onzichtbaar");
  }

  for (var i = 0; i < afb2.length; i++) {
      if (i === positie2){
        afb2[i].classList.remove("onzichtbaar");
      }
  }
}

function prevImage2(){
  console.log("prevImage aangeroepen!");
  if(positie2 > 0){
    positie2--;
    slideImages2();
  }
}

function nextImage2(){
  console.log("nextImage aangeroepen!");
  if(positie2 < afb2.length-1){
    positie2++;
    slideImages2();
  }
}

prevButton2.addEventListener("click", prevImage2);
nextButton2.addEventListener("click", nextImage2);
slideImages2();

// HOVER OVER AFB

let paragraaf = document.querySelectorAll(".text");

function hoverOver(){
  paragraaf[positie].innerHTML = "De titel van dit werk is " + "'" + afb[positie].getAttribute("data-title") + "'";
}

for (var i = 0; i < afb.length; i++) {
  afb[i].addEventListener("mouseover", hoverOver);
}

// HOVER OVER AFB2

let paragraaf2 = document.querySelectorAll(".text2");

function hoverOver2(){
  paragraaf2[positie2].innerHTML = "De titel van dit werk is " + "'" + afb2[positie2].getAttribute("data-title") + "'";
}

for (var i = 0; i < afb2.length; i++) {
  afb2[i].addEventListener("mouseover", hoverOver2);
}

// MOUSEOUT

function hoverWeg(){
  paragraaf[positie].innerHTML = "";
}

for (var i = 0; i < afb.length; i++) {
  afb[i].addEventListener("mouseout", hoverWeg);
}

function hoverWeg2(){
  paragraaf2[positie2].innerHTML = "";
}

for (var i = 0; i < afb2.length; i++) {
  afb2[i].addEventListener("mouseout", hoverWeg2);
}
