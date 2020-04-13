$(document).ready(function () {
    $('#switch-player-btn').on('click', function(){
        $('#switch-player').html() == "1" ? $('#switch-player').html('2') : $('#switch-player').html('1');
		$('#switch-player').html() == "1" ? $('#switch-player-btn').css("background-color", "#50e0ff") : $('#switch-player-btn').css("background-color", "#6cd883")
    });
})