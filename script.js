const header = document.querySelector(`#header`);
header.style.background = `white`;
header.style.width = `initial`;
setTimeout(() => {header.style.background = `black`}, 2000);

const title = document.querySelector(`#title`);
title.style.color = `black`;
title.style.width = `initial`;
setTimeout(() => {title.style.color = `white`}, 2000);

const text = `Bella Kocharyan`;
let i = 0;
function typeText(){
	if ( i < text.length){
	title.textContent += text.charAt(i) ;
	i++;
}
	setTimeout(typeText, 120);
		
}
typeText();

