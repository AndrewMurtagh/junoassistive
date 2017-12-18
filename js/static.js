

/*
$(function(){
	alert("My First Jquery Test");
});
*/

/*
$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.navbar').css('background','red');
} else {
$('.navbar').css('background','transparent');
}
});
*/

/*
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        /*
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
        *
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 4000, function(){
    }
});

*/
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

$(document).ready(function(){
	if ($(window).width() > 756) {
	    $("#sticky-sidebar").sticky({topSpacing:0});
	} else {
    	$("#sticky-sidebar").removeClass("spacing-medium");
    	$("#sticky-sidebar").addClass("spacing-small");
    	$("#sticky-sidebar").addClass("border-bottom");

	}

  });



$(document).ready(function () {
  $(".gallery-img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
});