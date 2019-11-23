let menu = document.querySelector(`.menu-toggler`);
let navBar = document.querySelector(`.nav-bar`);
let myProf = document.querySelector(`#prof`);
let navList = document.querySelector(`.nav-list`);
let navLink = document.querySelectorAll(`.nav-link`);
let up = document.querySelector(`.up`);

menu.addEventListener(`click`, () =>{
menu.classList.toggle(`open`);
navBar.classList.toggle(`open`);

});
navList.addEventListener(`click`, () =>{
	menu.classList.remove(`open`);
	navBar.classList.remove(`open`);
});

up.addEventListener(`click`, () =>{
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
});
AOS.init({
	duration: 1500,
	once: true
  });

