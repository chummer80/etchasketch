$(document).ready(function() {

	function randomColor() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgb(" + r + "," + g + "," + b + ")";
	}

	function fillCell() {
		var cell = $(this);
		var rgb, rgbArray, r, g, b;

		if (cell.hasClass("filled")) {
			rgb = cell.css("background-color");
			rgbArray = rgb.match(/[0-9]+/g);;
			r = parseInt(rgbArray[0]);
			g = parseInt(rgbArray[1]);
			b = parseInt(rgbArray[2]);

			//darken colors by 10%;
			r = Math.floor(r - 25, 0);
			g = Math.floor(g - 25, 0);
			b = Math.floor(b - 25, 0);
			rgb = "rgb(" + r + "," + g + "," + b + ")";
			cell.css("background-color", rgb);
		}
		else {
			cell.addClass("filled");
			cell.css("background-color", randomColor());
		}

	}

	function buildGrid(size) {
		var $gridRow, $gridCell, i, j;
		var sizePercentage = (100 / size) + "%";

		for (i = 0; i < size; i++) {
			$gridRow = $("<div></div>");
			$gridRow.addClass("grid_row");
			$gridRow.css("height", sizePercentage);

			for (j = 0; j < size; j++) {
				$gridCell = $("<div></div>");
				$gridCell.addClass("grid_cell");
				$gridCell.css("width", sizePercentage);
				$gridCell.mouseenter(fillCell);
				$gridRow.append($gridCell);
			}

			$("#grid_container").append($gridRow);
		}
	}

	$("#new_grid_button").click(function() {
		var gridSize = prompt("How many squares per side?");

		if ((gridSize % 1 === 0) && (gridSize > 0)){
			$("#grid_container").empty();
			buildGrid(gridSize);
		}
		else {
			alert("Input error: please enter a positive number.");
		}
	});


	buildGrid(16);
});