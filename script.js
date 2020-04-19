$(document).ready(function () {
    $('#switch-player-btn').on('click', function(){
        if ($('#switch-player').html() == "1") {
			$('#switch-player').html('2');
			$('#switch-player-btn').css("background-color", "#50e0ff");
		}
		else {
			$('#switch-player-btn').css("background-color", "#6cd883");
			$('#switch-player').html('1');
		}
	});
});
$(document).ready(function () {
	$('.chest-text').on('click', function() {
		if ($('#switch-player').html() == "1") {
			$('.chest-input').css("border-bottom" "1px" "dotted" "color" "red");
		}
		else {
			$('.chest-input').css("border-bottom", "1px" "dotted" "green");
		}
	});
});
	