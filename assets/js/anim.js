$(window).on("load",function(){
		// Animate loader off screen
	$(".wavy").fadeOut(3000);
});

$(document).ready(function(){
	$(".right > a").on("click",function(){
		$(this).parents(".main-rap,#main-rap").find("#main_menu").slideToggle(1000);
	});
});

$(window).on("load",function(){
	$(".uniform-header").show();
});

$(document).ready(function(){
	$(".right > a").on("click",function(){
		$(this).parents(".main-rap,#main-rap").find("#header").hide();
	});
});

$(document).ready(function(){
  $(".close > a").click(function(){
    $("#main_menu").slideToggle(1000);
  });
});

$(document).ready(function(){
  $(".close > a").click(function(){
    $("#header").show();
  });
});


