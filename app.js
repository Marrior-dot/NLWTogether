let read = document.getElementsByClassName("read");
let division = document.getElementsByClassName("question");


console.log(division[0].childNodes[3].firstChild);
read[0].addEventListener("click", function(){
	let img0 = division[0].childNodes[1].childNodes[0];
	let a0 = division[0].childNodes[3].firstChild;
	let a1 = division[0].childNodes[3].lastChild;
		division[0].style.backgroundColor = "#E5EAF1";
		img0.style.backgroundColor = "var(--greyblue)";	
		a0.innerHTML = `<img src = 'imgsFigma/check 1.svg'>Pergunta lida`;
		a1.style.display = "none";
})
read[1].addEventListener("click", function(){
	let img1 = division[1].childNodes[1].childNodes[0];
	let a2 = division[1].childNodes[3].firstChild;
	let a3 = division[1].childNodes[3].lastChild;
		division[1].style.backgroundColor = "#E5EAF1";
		img1.style.backgroundColor = "var(--greyblue)";	
		a2.innerHTML = `<img src = 'imgsFigma/check 1.svg'>Pergunta lida`;
		a3.style.display = "none";
})
read[2].addEventListener("click", function(){
	let img2 = division[2].childNodes[1].childNodes[0];
	let a4 = division[2].childNodes[3].firstChild;
	let a5 = division[2].childNodes[3].lastChild;
		division[2].style.backgroundColor = "#E5EAF1";
		img2.style.backgroundColor = "var(--greyblue)";	
		a4.innerHTML = `<img src = 'imgsFigma/check 1.svg'>Pergunta lida`;
		a5.style.display = "none";
})
