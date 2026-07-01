const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

const closeBtn = document.querySelector(".close-menu");

const overlay = document.querySelector(".menu-overlay");

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.add("active");

overlay.classList.add("active");

document.body.style.overflow="hidden";

});

closeBtn.addEventListener("click",closeMenu);

overlay.addEventListener("click",closeMenu);

function closeMenu(){

mobileMenu.classList.remove("active");

overlay.classList.remove("active");

document.body.style.overflow="auto";

}

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeMenu();

}

});