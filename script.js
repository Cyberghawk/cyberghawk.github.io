let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');



menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}