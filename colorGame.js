var numberOfSquares = 6;
var colors=[];
var pickedColor;
var h1=document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay=document.querySelector('#message');
var resetButton=document.querySelector('#reset');
var modeButtons=document.querySelectorAll('.mode');

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
} //End Init

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			// How many squares to show
			this.textContent === 'Easy' ? numberOfSquares=3:numberOfSquares=6;
			reset();
		});
	}
	resetButton.addEventListener('click',function(){
		reset();
	});
}

function setUpSquares(){
	for (i=0; i<squares.length; i++){
		// Add click listners to squares
		squares[i].addEventListener('click', function(){
			//Get color of clicked square
			var clickedColor = this.style.background;
			//Compare to see if correct color
			if(clickedColor === pickedColor){
				messageDisplay.textContent='Correct!';
				changeColors(clickedColor);
				h1.style.background=pickedColor;
				resetButton.textContent='Play Again?';
			} else {
					this.style.background='#232323';
					messageDisplay.textContent='Try Again';
			}
		});
	}
}

function reset(){
	// Generate new colors
	colors=generateRandomColors(numberOfSquares);
	// pick a new win color
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	// change color of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display='block';
			squares[i].style.background = colors[i];
		} else {
				squares[i].style.display='none';
		}
	}
	messageDisplay.textContent="";
	resetButton.textContent='New Colors';
	h1.style.background='';
}

function changeColors(color){
	for(i=0; i < squares.length; i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return(colors[random]);
}

function generateRandomColors(num){
	// Create array
	var arr=[];
	// Add NUM randon colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
		var r=Math.floor(Math.random() * 256);
		var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', '+ b +')';
}
