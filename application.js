$(document).ready(function () {
	$("#set").click(function () {
		$(".singleDiv").remove();
		var rowNumber = $(".rowNum").val();
	var singleDiv = '<div class="singleDiv border"><p class="color">#FFFFFF</p></div>';
	var rowDiv = '<div class="rowDiv"></div>';
	var divWidth = $(document).width() / rowNumber;
	var container = $("#container");
	var rowDivPla = $(".rowDiv");
	for (var j = 0; j < rowNumber; j++) {
		container.append(rowDiv);
		for (var i = 0; i < rowNumber; i++) {
			$(".rowDiv").eq(j).append(singleDiv);
		}
	}
	$(".singleDiv").css({"width": divWidth, "height": divWidth});
	$(".singleDiv").on("click",function () {
		var letters = '1234567890ABCDEF';
		var color = '#';
		for (var k = 0; k < 6; k++) {
			color = color + letters[Math.floor(Math.random() * 16)];
		}
		$(this).css({'background-color': color});
		$(this).find(".color").text(color);
	});

});
	$("#removeBor").click(function () {
		$(".singleDiv").toggleClass("border");
	});
});