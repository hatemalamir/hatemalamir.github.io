(function () {
	"use strict";
	window.onload = function(){
		// start button behavior
		document.getElementById("start").onclick = () => {
			document.getElementById("start").disabled = true;
			document.getElementById("stop").disabled = false;
			document.getElementById("animation").disabled = true;
		};
		// stop button behavior
		document.getElementById("stop").onclick = () => {
			document.getElementById("start").disabled = false;
			document.getElementById("stop").disabled = true;
			document.getElementById("animation").disabled = false;
		};
	};
})();
