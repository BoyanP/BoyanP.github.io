window.onload=function(e){
	

var gitButton = document.getElementById('githubButton');

var cpButton = document.getElementById('codepenButton');

gitButton.addEventListener("click",gitHubButtonHandler);
cpButton.addEventListener('click',codepenButtonHandler);

window.onresize = function(e){

	moveOverintroParagraph();


};


};


function gitHubButtonHandler(){
	console.log('does gitbutton get called?');
	window.location.href="https://github.com/BoyanP";


}


function codepenButtonHandler(){


	window.location.href="https://codepen.io/BoyanP/";

}



function moveOverintroParagraph(){

var width= window.innerWidth;
var height =window.innerHeight;
//so the intro paragraph looks good at 25% margin-left when my window width is around 1900
//and 1900/22 ~86
var constant = 86; 

var introparagraph = document.getElementById('introparagraph');


var newMargin = width / constant;
introparagraph.style.marginLeft = newMargin+'%';


}
