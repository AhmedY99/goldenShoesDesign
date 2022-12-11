let basket = JSON.parse(localStorage.getItem("data")) || [];

let culculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
culculation();

document.getElementById("bars1").addEventListener("click", onChange1);
function onChange1(){
    var x = document.getElementById("sub-nav-holder");

    if(x.style.width =="100%"){
        x.style.width = "0";
        x.style.display ="none";
        
       
    }
    else{
        x.style.width = "100%";
        x.style.display ="block";
        
        
    }
}

function myFunction(){
    var x = document.getElementById("input-container");
    if(x.style.height =="300px"){
        x.style.height = "50px";
       
        
       
    }
    else{
        x.style.height = "300px";
      
        
        
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

