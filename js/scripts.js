
jQuery(document).ready(function() {
	
	
	 	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item.c2').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            if (e.direction=="left") {
	                $('.carousel-item.c2').eq(i).appendTo('.carousel-inner.i2');
	            }
	            else {
	                $('.carousel-item.c2').eq(0).appendTo('.carousel-inner.i2');
	            }
	        }
	    }
	});
	
});
