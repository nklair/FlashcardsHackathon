//injectCode();
var timer = window.setInterval( function() {alert("This is an alert")}, 3000);
clearIntverval(timer);
/*
function injectCode() {

	var body = document.body;

	body.appendChild(document)
	
	var head = document.head;

	var link = document.createElement(LINK);
	link.setAttribute('href', )

	var outerDiv = document.createElement("DIV");
	outerDiv.className = "modal";
	outerDiv.id = "myModal";

	var innerDiv = document.createElement("DIV");
	innerDiv.className = "modal-content";

	var close = document.createElement("SPAN");
	close.className = "close";
	close.innerHTML = "Close";
	
	var next = document.createElement("SPAN");
	next.className = "next";
	next.innerHTML = "Next";

	var center = document.createElement("CENTER");

	var para = document.createElement("P");
	para.className = "text";
	
	center.appendChild(para);
	innerDiv.appendChild(close);
	innerDiv.appendChild(next);
	innerDiv.appendChild(center);
	outerDiv.appendChild(innerDiv);
	body.appendChild(outerDiv);



}

*/
