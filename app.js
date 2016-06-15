$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function(){
  var thanks = $("#thanks");
  thanks.addClass("animate");
  var colors = ["#FF0000", "#00FF00", "#0000FF", 
  				"#FFFF00", "#00FFFF", "#FF00FF", 
  				"#C0C0C0", "#990099", "#FFFF00"];
  var index = 0;
  $("body").on("keydown", function(e) {
  	index += 1;
  	if(index >= colors.length) {
  		index = 0;
  	} 
    thanks.css({ "color": colors[index] });
  });
});