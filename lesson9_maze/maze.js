"use strict";

$(function() {
	let entered = false;
	let touched = false;

	const $boundary = $(".boundary");
	const $stat = $("#status");

	$("#start").mouseover(function() {
		entered = true;
		touched = false;
		$boundary.removeClass("youlose");
	});

	$boundary.mouseover(function() {
		if(entered) {
			touched = true;
			$boundary.addClass("youlose");
		}
		else {
			$stat.text("You need to enter the maze!");
		}
	});

	$("#end").mouseover(function() {
		if(!entered) {
			$stat.text("You need to enter the maze!");
		}
		else {
			entered = false;
			if(!touched) {
				$stat.text("You win! :D");
			}
			else {
				$stat.text("Sorry, you lost. :(");
			}
		}
	});

	$("#maze").mouseleave(function() {
		if(entered){
			touched = true;
			$boundary.addClass("youlose");
		}
	});
});
