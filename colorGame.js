var numberOfSquares=6;
var colors=[];
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		console.log(this.textContent);
		if(this.textContent==="Easy") numberOfSquares=3;
		else numberOfSquares=6;
		reset();
		});
	}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.background;
			//console.log(clickedColor);
			if(clickedColor===pickedColor){
				message.textContent="Correct";
				changeColors(pickedColor);
				h1.style.background=clickedColor;
				resetButton.textContent="Play Again?";
			}else{
				this.style.background="#232323";
				message.textContent="Try Again";
			}
		});
	}
}

function reset(){
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
	message.textContent="";
	resetButton.textContent="New Colors";
}
/*
easybtn.addEventListener("click",function(){
	numberOfSquares=3;
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="#232323";
});
hardbtn.addEventListener("click",function(){
	numberOfSquares=6;
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	h1.style.background="#232323";	
});
*/
resetButton.addEventListener("click",function(){
	/*colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	message.textContent="";
	this.textContent="New Colors";*/
	reset();
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		//console.log(clickedColor);
		if(clickedColor===pickedColor){
			message.textContent="Correct";
			changeColors(pickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}else{
			this.style.background="#232323";
			message.textContent="Try Again";
		}
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}