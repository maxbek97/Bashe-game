$(document).ready(function () {
    var state = "state_1_js";
	var switchPlayer = $('#switch-player');
    $('#switch-player-btn').on('click',	function(){
        $(".chest-input").each(function(i, element){
            $(element).attr('disabled', 'disabled');
        });
        if (switchPlayer.html() == "1-й") {
            $(switchPlayer).html('2-й');
            $(this).toggleClass("state_1_js").toggleClass("state_2_js");
            state = "state_2_js";
        } else {
            $(switchPlayer).html('1-й');
            $(this).toggleClass("state_1_js").toggleClass("state_2_js");
            state = "state_1_js";
        }
        $(".chest-input").not(":checked").slice(0,4).removeAttr("disabled");
    });
        $('.chest-input').change(function() {
            if (this.checked) {
                $(this).addClass(state);
            }
            else {
                $(this).removeClass(state);
            }
        });
	$('#last-element').change(function() {
		if ($('#switchPlayer').html() == "1-й") {
		alert ("Congratulations, First player is ****");
		} else {
		alert ("Congratulations, Second player is ****");
		}
	});
	$('#restock').on('click', function() {
		location.reload();
	});
		$('.night-input').change(function() {
			$('body').toggleClass('darkmod');
	});
});