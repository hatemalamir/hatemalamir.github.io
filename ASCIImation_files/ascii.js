let whichOne = "Blank";
let timer = null;
let frames = null;
let frame = 0;

(function () {
	"use strict";
	window.onload = function(){
		// start button behavior
		document.getElementById("start").onclick = () => {
			document.getElementById("start").disabled = true;
			document.getElementById("stop").disabled = false;
			document.getElementById("animation").disabled = true;
			frames = ANIMATIONS[whichOne].split("=====\n");

			timer = window.setInterval(() => {
				document.getElementById("text-area").value = frames[frame];
				frame = (frame + 1) % frames.length;
			}, 250);
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
	};
})();
