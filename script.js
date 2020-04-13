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