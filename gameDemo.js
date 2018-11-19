
//Color guesing Game js

//DOM

var  hColor=document.querySelector(".head");
var guestPos= document.getElementById("guest");
var message= document.getElementById("empty");

var square =document.querySelectorAll(".square");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");
var tried=document.querySelector("#try");

var count=0;
// var colors=[
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
 var colors=genarateColors(6);

 var pickedColor=randomNumber();
 guestPos.textContent=pickedColor;

 console.log(pickedColor,randomColor());
 
 //when clicked NEW COLORS play again
 resetButton.addEventListener("click",function () {
	// change and genate again colors
	message.textContent="";
	hardButton.classList.remove("selectButton");
	easyButton.classList.remove("selectButton");
	 colors=genarateColors(6);
	 pickedColor=randomNumber();
	for (var i = 0; i < colors.length; i++) {
		//call and put all colors in the screen
 		guestPos.textContent=pickedColor;
		square[i].style.backgroundColor=colors[i];

	}
	resetButton.textContent="NEW COLORS";
	count=0;
	hColor.style.backgroundColor="steelblue";
});

 // when clicked easy easyButton

easyButton.addEventListener("click",function () {

	hColor.style.backgroundColor="steelblue";
	resetButton.textContent="NEW COLORS";
	count=0;
	easyButton.classList.add("selectButton");
	hardButton.classList.remove("selectButton");
	// change and genate again colors
	 colors=genarateColors(3);
	 pickedColor=randomNumber();
	for (var i = 0; i < square.length; i++) {
		//call and put all colors in the screen
 		guestPos.textContent=pickedColor;
		square[i].style.backgroundColor=colors[i];
		if (i>=3) {
			square[i].style.backgroundColor="black";
		}

	}
	
});

// when clicked Hard Button 

hardButton.addEventListener("click",function () {

	hColor.style.backgroundColor="steelblue";
	resetButton.textContent="NEW COLORS";
	count=0;
	easyButton.classList.remove("selectButton");
	hardButton.classList.add("selectButton");
	// change and genate again colors
	 colors=genarateColors(6);
	 pickedColor=randomNumber();
	for (var i = 0; i < colors.length; i++) {
		//call and put all colors in the screen
 		guestPos.textContent=pickedColor;
		
		square[i].style.backgroundColor=colors[i];


	}
	
});

//when clicked any box
for (var i = 0; i < colors.length; i++) {
	
	// when clicked change color
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function () {

		var clikedColor=this.style.backgroundColor;
		count++;
		

		if (clikedColor===pickedColor) {
			allColor(pickedColor);
			
			//hColor.style.backgroundColor=pickedColor;
			message.textContent="Correct! "+(count-1);
			resetButton.textContent="Play Again?";
			count=0;
			

		}
		else{
			message.textContent="Try Again! "+count;
			this.style.backgroundColor="black";
		}
});
}

//random colors number
 function randomNumber() {
 	// body...
 	var rand=Math.floor(Math.random()*colors.length);
 	return colors[rand];
 }


 function allColor(color1) {
 	// body...
 	for (var i = 0; i < colors.length; i++) {
 		square[i].style.backgroundColor=color1;
 		hColor.style.backgroundColor=color1;
 	}
 }

 //put a genarate colors
 function genarateColors(num) {
 	// create array
 	var arr=[];
 	//return num times
 	for (var i = 0; i < num; i++) {
 		//get random numbers color and push in the array
 		arr.push(randomColor());

 	}
 	return arr;
 	 
 }

 //make a random colors

 function randomColor() {
 	//genatate RGB colors
 	var r=Math.floor(Math.random()*256)
 	var g=Math.floor(Math.random()*256)
 	var b=Math.floor(Math.random()*256)
 	return "rgb("+r+", " +g+", "+ b+")";
 }