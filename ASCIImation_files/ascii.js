let whichOne = "Blank";
let timer = null;
let frames = null;
let frame = 0;
let intervalMS = 250;
const fontSizes = {
	"Tiny": "7pt",
	"Small": "10pt",
	"Medium": "12pt",
	"Large": "16pt",
	"Extra Large": "24pt",
	"XXL" : "32pt"
};

(function () {
	"use strict";
	function animationFunc() {
		document.getElementById("text-area").value = frames[frame];
		frame = (frame + 1) % frames.length;
	}

	window.onload = function(){
		// start button behavior
		document.getElementById("start").onclick = () => {
			document.getElementById("start").disabled = true;
			document.getElementById("stop").disabled = false;
			document.getElementById("animation").disabled = true;
			frames = ANIMATIONS[whichOne].split("=====\n");
			timer = window.setInterval(animationFunc , intervalMS);
		};
		// stop button behavior
		document.getElementById("stop").onclick = () => {
			document.getElementById("start").disabled = false;
			document.getElementById("stop").disabled = true;
			document.getElementById("animation").disabled = false;
			document.getElementById("text-area").value = ANIMATIONS[whichOne];
			window.clearInterval(timer);
			timer = null;
		};
		// animation selection behavior
		document.getElementById("animation").onchange = () => {
			whichOne = document.getElementById("animation").value;
			document.getElementById("text-area").value = ANIMATIONS[whichOne];
		};
		// turbo checkbox behavior
		document.getElementById("turbo").onchange = () => {
			intervalMS = intervalMS == 250 ? 50 : 250;
			if(timer !== null) {
				// we need to clear the previously running timer, if any, before setting a new one
				// otherwise, both will be running
				window.clearInterval(timer);
				timer = window.setInterval(animationFunc , intervalMS);
			}
		};
		// size button behavior
		document.getElementById("fontsize").onchange = () => {
			document.getElementById("text-area").style["fontSize"] =
				fontSizes[document.getElementById("fontsize").value];
		};
	};
})();
