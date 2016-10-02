injectCode();

/*chrome.webNavigation.onCompleted.addListener(function() {
	//alert("PAGE LOADED YAY!!!!!");
	chrome.tabs.executeScript({
		code: 'injectCode()'
	});
	//injectCode();
}); */

var cards = [
			["What... is your name?", "It is Arthur, King of the Britons"],
			["What... is your quest?", "To seek the Holy Grail."],
			["What is the air speed velocity of an unladen swallow?", "What do you mean? An African or a European swallow?"],
			["What does WWW stand for?", "World Wide Web"],
			["1024 Gigabytes are equal to 1 what?", "Terabyte"],
			["In 1971, what company invented the floppy disc?", "IBM"],
			["What is the binary equivalent of  29?", "11101"],
			["If you wanted to print all of the elements of a binary tree in sorted order, what type of traversal would you use?", "In Order"],
			["When referring to computer memory, what does RAM stand for?", "Random Access Memory"],
			["What is the difference between HTTP and HTTPS?", "HTTPS is a secure HTTP"],
			["What is the Big O time complexity of quicksort?", "O(nlog(n))"],
			["Which editor is better, emacs or vim?", "nano?"]
			// ["What is the capital of Indiana?", "Indianapolis"],
			// ["What is speed of light?", "2.997e8"],
			// ["What is the time derivative of momentum?", "Force"],
			// ["What is the scientific name for the common potato?", "Solanum Tuberosum L."],
			// ["What is the chemical symbol for Iron?", "Fe"],

];
var side = 0;
var card = 0;
var wasFlipped = false;

var timer = window.setInterval(function() {
	document.getElementById("myModal").style.display = "block";
	//alert("This is an alert");
	}, 
	5000);
//window.clearInterval(timer);

// the text to display in the popup
var string = cards[card][side];
var text = document.getElementsByClassName('text')[0];
text.style.fontSize = "34px";
text.innerHTML = string;

// Get the modal
var modal = document.getElementById('myModal');

// Get the modal-content
var modalContent = document.getElementsByClassName("modal-content")[0];

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

var next = document.getElementsByClassName("next")[0];

var flip = document.getElementsByClassName("flip")[0];

flip.onclick = function() {
	wasFlipped = true;
	if(side) {
		side = 0;
	} else {
		side = 1;
	}
    text.innerHTML = cards[card][side];
}

next.onclick = function() {
	wasFlipped = false;
	side = 0;
	card++;
    if (card >= cards.length) {
    	card = 0;
    }

    text.innerHTML = cards[card][side];
}

//When the user clicks on <span> (x), close the modal
close.onclick = function() {
	if(side || wasFlipped) {
		side = 0;
		card++;
		if (card >= cards.length) {
    		card = 0;
    	}
	}
	text.innerHTML = cards[card][side];
	
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//        modal.style.display = "none";
//    }
// }

//document.getElementsByClassName("close")[0].onclick = function() {
//	console.log("got called");
//	document.getElementById("myModal").style.display = "none";
//}

function redColor() {
	alert("this is working");
};

function injectCode() {

	var body = document.body;
	var head = document.head;

	var headHtml = "<link href='https://fonts.googleapis.com/css?family=Boogaloo' rel='stylesheet'>"

	headHtml += "<style>";
	//headHtml += "@font-face {";
	//headHtml += "font-family: flashCardFont;";
	//headHtml += "src: url(https://fonts.google.com/specimen/Kalam?selection.family=Kalam);";
	//headHtml += "}";

	headHtml += "/* The Modal (background) */";
	headHtml += ".modal {";
	headHtml += "display: none; /* Hidden by default */";
	headHtml += "position: fixed; /* Stay in place */";
	headHtml += "z-index: 1; /* Sit on top */";
	headHtml += "padding-top: 100px; /* Location of the box */";
	headHtml += "left: 0;";
	headHtml += "top: 0;";
	headHtml += "width: 100%; /* Full width */";
	headHtml += "height: 100%; /* Full height */";
	headHtml += "overflow: auto; /* Enable scroll if needed */";
	headHtml += "background-color: rgb(0,0,0); /* Fallback color */";
	headHtml += "background-color: rgba(0,0,0,0.4); /* Black w/ opacity */";
	headHtml += "}";
			
	headHtml += "/* Modal Content */";
	headHtml += ".modal-content {";
	headHtml += "background-color: #add8e6;";
	headHtml += "margin: auto;";
	headHtml += "padding: 20px;";
	headHtml += "font-family: 'Boogaloo', cursive;";
	//headHtml += "border: 1px solid #111;";
	headHtml += "height: 35%;";
	headHtml += "width: 40%;";
	headHtml += "border-radius: 20px 80px";
	headHtml += "}";
			
	headHtml += "/* The Next Button */";
	headHtml += ".next {";
	headHtml += "color: #0000ff;";
	headHtml += "position: fixed;";
	headHtml += "top: 48%;";
	headHtml += "right: 37.5%;";
	headHtml += "font-size: 20px;";
	headHtml += "height: 24px;";
	headHtml += "width: 60px;";
	//headHtml += "border: 1px solid #111;";
	headHtml += "background-color: #fff5ee;";
	headHtml += "vertical-align: middle;";
	headHtml += "border-radius: 5px;";
	//headHtml += "display: block;";
	headHtml += "}";

	headHtml += ".next:hover,";
	headHtml += ".next:focus {";
	headHtml += "color: #000;";
	headHtml += "text-decoration: none;";
	headHtml += "cursor: pointer;";
	headHtml += "}";

	headHtml += "/* The Flip Button */";
	headHtml += ".flip {";
	headHtml += "color: #0000ff;";
	headHtml += "position: fixed;";
	headHtml += "top: 48%;";
	headHtml += "left: 47.5%;";
	headHtml += "font-size: 20px;";
	headHtml += "height: 24px;";
	headHtml += "width: 60px;";
	//headHtml += "border: 1px solid #111;";
	headHtml += "background-color: #fff5ee;";
	headHtml += "vertical-align: middle;";
	headHtml += "border-radius: 5px;";
	headHtml += "}";

	headHtml += ".flip:hover,";
	headHtml += ".flip:focus {";
	headHtml += "color: #000;";
	headHtml += "text-decoration: none;";
	headHtml += "cursor: pointer;";
	headHtml += "}";
			
	headHtml += "/* The Close Button */";
	headHtml += ".close {";
	headHtml += "color: #0000ff;";
	headHtml += "position: fixed;";
	headHtml += "top: 48%;";
	headHtml += "left: 37.5%;";
	headHtml += "font-size: 20px;";
	headHtml += "height: 24px;";
	headHtml += "width: 60px;";
	//headHtml += "border: 1px solid #111;";
	headHtml += "background-color: #fff5ee;";
	headHtml += "vertical-align: middle;";
	headHtml += "border-radius: 5px;";
	headHtml += "}";
			
	headHtml += ".close:hover,";
	headHtml += ".close:focus {";
	headHtml += "color: #f00;";
	headHtml += "text-decoration: none;";
	headHtml += "cursor: pointer;";
	headHtml += "}";
			
	headHtml += "</style>";


	var bodyHtml = "<!-- Trigger/Open The Modal -->";
//	bodyHtml +=	"<button id='myBtn'>Open Modal</button>";

	bodyHtml +=	"<!-- The Modal -->";
	bodyHtml +=	"<div id='myModal' class='modal'>";

	bodyHtml +=	"<!-- Modal content -->";
	bodyHtml +=	"<div class='modal-content'>";
	bodyHtml +=	"<span class='close'>Close</span>";
	bodyHtml +=	"<span class='next'>Next</span>";
	bodyHtml +=	"<span class='flip'>Flip</span>";
	bodyHtml +=	"<center><p class='text'></p></center>";
	bodyHtml +=	"</div>";

	bodyHtml +=	"</div>";

//	bodyHtml +=	"<script>";
//	bodyHtml +=	"/* the text to display in the popup */";
//	bodyHtml +=	"var string = 'This is popup 1';";
//	bodyHtml +=	"var text = document.getElementsByClassName('text')[0];";
//	bodyHtml +=	"text.innerHTML = string;";

//	bodyHtml +=	"/* Get the modal */";
//	bodyHtml +=	"var modal = document.getElementById('myModal');";

//	bodyHtml +=	"/* Get the modal-content */";
//	bodyHtml +=	"var modalContent = document.getElementsByClassName('modal-content')[0];";

//	bodyHtml +=	"/* Get the button that opens the modal */";
//	bodyHtml +=	"var btn = document.getElementById('myBtn');";

//	bodyHtml +=	"/* Get the <span> element that closes the modal */";
//	bodyHtml +=	"var close = document.getElementsByClassName('close')[0];";

//	bodyHtml +=	"/* Get the <span> element that changes the color */";
//	bodyHtml +=	"var next = document.getElementsByClassName('next')[0];";

//	bodyHtml +=	"/* When the user clicks the button, open the modal";
//	bodyHtml +=	"btn.onclick = function() {";
//	bodyHtml +=	"modal.style.display = 'block';";
//	bodyHtml +=	"}";
//	bodyHtml += "var timer = window.setInterval(function() {modal.style.display = 'block';}, 5000);";
//	bodyHtml += "clearIntverval(timer);";
//	bodyHtml +=	"next.onclick = function() {";

//	bodyHtml +=	"if (string == 'This is popup 1') {";
//	bodyHtml +=	"string = 'This is popup 2';";
//	bodyHtml +=	"} else if (string == 'This is popup 2') {";
//	bodyHtml +=	"string = 'This is popup 3';";
//	bodyHtml +=	"} else {";
//	bodyHtml +=	"string = 'This is popup 1';";
//	bodyHtml +=	"}";
//	bodyHtml +=	"text.innerHTML = string;";
//	bodyHtml +=	"}";



//	bodyHtml +=	"/* When the user clicks on <span> (x), close the modal */";
//	bodyHtml +=	"close.onclick = function() {";
//	bodyHtml +=	"console.log('got called');";
//	bodyHtml +=	"document.getElementById('myModal').style.display = 'none';";
//	bodyHtml +=	"};";

//	bodyHtml +=	"/* When the user clicks anywhere outside of the modal, close it */";
//	bodyHtml +=	"window.onclick = function(event) {";
//	bodyHtml +=	"if (event.target == modal) {";
//	bodyHtml +=	"modal.style.display = 'none';";
//	bodyHtml +=	"}";
//	bodyHtml +=	"};";
//	bodyHtml +=	"</script>";

	head.innerHTML += headHtml;
	body.innerHTML += bodyHtml;
}

*/
