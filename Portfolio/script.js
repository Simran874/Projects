/*                                        For dark/light mode 
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }  */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('link');
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("link");
        document.querySelector("header nav a[href*= " + id + "]").classList.add("link");
      });
    }
  });
};

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);

menuIcon.classList.remove('bx-x');
navbar.classList.toggle('link');


/* ScrollReveal({ 
  reset: true ,
  distance: '80px',
  duration: 2000,
  delay:200
});

ScrollReveal().reveal('.content,.heading', {origin:'top'}); 
ScrollReveal().reveal('.contain , .about , .skills ,.projects , .contact', {origin:'bottom'});  */
