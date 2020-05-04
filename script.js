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
			if (this.checked) {
		$('body').css('background', '#37454c');
		$('h1').css('background', '#37454c');
		$('.container-view').css({'background-color' : '#506c8e', 'border' : '#223888 6px solid'});
		$('.White-panel').css('background-color', '#757575');
		$('.state_1_js').css('background-color', '#91c356');
		$('.state_2_js').css('background-color', '#55c8d4');
		$('.chest-input.state_1_js + .chest-text').css('border-bottom', '2px solid #91c356');
		$('.chest-input.state_2_js + .chest-text').css('border-bottom', '2px solid #55c8d4');
		$('.rulebox p').css('color', 'white');
			}
			else {
		$('body').css('background', '#518ea0');
		$('h1').css('background', '#518ea0');
		$('.container-view').css({'background-color' : '#e8e2b3', 'border' : '#b9b388 6px solid'});
		$('.White-panel').css('background-color', 'white');
		$('.state_1_js').css('background-color', '#7eea00');
		$('.state_2_js').css('background-color', '#21e0f3');
		$('.chest-input.state_1_js + .chest-text').css('border-bottom', '2px solid #7eea00');
		$('.chest-input.state_2_js + .chest-text').css('border-bottom', '2px solid #21e0f3');
		$('.rulebox p').css('color', 'black');
			}
	});
});
var musicSpan = document.getElementById('musicSpan');
musicSpan.addEventListener('click',function(){
  document.getElementById('sound').play()
})
