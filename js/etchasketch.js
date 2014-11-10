$(document).ready(function() {

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
				$gridCell.mouseenter(function() {
					$(this).addClass("filled");
				});
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