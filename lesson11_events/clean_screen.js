$(function () {
	let timerId = null;
	$("#start").on("click", function() {
		if(timerId)
			clearInterval(timerId);
		const $width = parseInt($("#width").val());
		const $growthAmount = parseInt($("#growth-amount").val());
		const $growthRate = parseInt($("#growth-rate").val());
		const $circlesNumber = parseInt($("#circles-number").val());
		$canvas = $("#canvas");
		$canvas.empty();

		for(let i=0; i < $circlesNumber; i++) {
			$canvas.append($("<span>", {
				"class": "circle",
				"css": {
					"width": $width,
					"height": $width
				}
			}));
		}

		$canvas.on("click", "span", function() {
			clearInterval(timerId);
			$("#canvas").empty();
		});

		timerId = setInterval(function() {
			const $circle = $(".circle");
			const newH = parseInt($circle.css("height")) + $growthAmount + "px";
			const newW = parseInt($circle.css("width")) + $growthAmount + "px";
			$circle.css("height", newH);
			$circle.css("width", newW);
		}, $growthRate);
	});

});
