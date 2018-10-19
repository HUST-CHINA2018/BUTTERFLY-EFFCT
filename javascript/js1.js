// JavaScript Document	
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function() {
		$(".element").css("color", randomColor());
	}, 5100)
 
	function randomColor() {
		return "rgb(" + 0 + "," + 0 + "," + 0 + ")";
	} 
	timer = setInterval(function() {
		$("#hiddentitle").css("opacity", "1");
	}, 5100)
$(document).ready(function(){

            var box = $("#menu_box");
            var boxTop = box.offset().top; 

            $(document).scroll(function(){

                var winScrollTop = $(window).scrollTop(); 
       
                if(winScrollTop > boxTop){
                    box.addClass("fixed");
                }else{
                    box.removeClass("fixed");
                }

            });
        });
$(document).ready(function(){

            var box = $("#nav_p");
			var bottom = $("#design");
            var boxTop = box.offset().top; 
			var boxTop2 = bottom.offset().top;
			boxTop = boxTop - 200 ;
			boxTop2 = boxTop2  - 700;

            $(document).scroll(function(){

                var winScrollTop = $(window).scrollTop(); 
       
                if(winScrollTop > boxTop && winScrollTop < boxTop2){
                    box.addClass("fixed");
                }else{
                    box.removeClass("fixed");
                }

            });
        });
$(document).ready(function(){

            var box = $("#nav_d");
			var bottom = $("#experiment");
            var boxTop = box.offset().top; 
			var boxTop2 = bottom.offset().top;
			boxTop = boxTop - 200 ;
			boxTop2 = boxTop2  - 700;

            $(document).scroll(function(){

                var winScrollTop = $(window).scrollTop(); 
       
                if(winScrollTop > boxTop && winScrollTop < boxTop2){
                    box.addClass("fixed");
                }else{
                    box.removeClass("fixed");
                }

            });
        });
$(document).ready(function(){

            var box = $("#nav_e");
			var bottom = $("#design");
            var boxTop = box.offset().top; 
			var boxTop2 = bottom.offset().top;
			boxTop = boxTop - 200 ;
			boxTop2 = boxTop2  - 700;

            $(document).scroll(function(){

                var winScrollTop = $(window).scrollTop(); 
       
                if(winScrollTop > boxTop){
                    box.addClass("fixed");
                }else{
                    box.removeClass("fixed");
                }

            });
        });

 $(document).ready(function(){
      $(".p1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 180 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });	
	    $(".p2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
	       $(".p3").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 180 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			  $(".p4").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			      $(".d1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 180 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });	
	    $(".d2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
	       $(".e1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 180 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			  $(".e2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
						  $(".h1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
});