$(function(){
	$(".header__slider").slick({
	dots:true,
	autoplay:true,
	prevArrow:'<button type="button" class="slick-prev"><img src="../images/next.png"></button>',
	nextArrow:'<button type="button" class="slick-next"><img src="../images/prev.png"></button>',
	responsive:[
	{

	breakpoint: 775,
      settings: {
        arrows: false,
        dots:false,
      }
    },
	]
	});
	
	$(".slider__company").slick({
		prevArrow:'<button type="button" class="slick-prev"><img src="../images/prev2.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="../images/next2.png"></button>',
		 slidesToShow: 5,
		 autoplay:true,
		 infinite: true,
		 responsive: [
   	{

	breakpoint: 1090,
      settings: {
       
        arrows: false,
      }
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 3,
        arrows: false,
        
      }
    },
    {
    	breakpoint: 555,
      settings: {
        slidesToShow: 1,
        
       arrows: false,
      }
    },
    
    ]

	});

});

$(function () {
	$('.popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.hidden__form-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
/*$(document).ready(function(){
	$('.popular__inner-title').on('click', function(){
		$('.product__hidden').fadeToggle();
		
	});
	
});*/
$(document).ready(function(){
    $(".popular__inner-title").click(function(){
        $("#hidden__block").slideToggle("slow");
        
    });
});

$(".header__menu-btn").on("click",function(){
	$(".header__menu-list").slideToggle("slow");
	
});





	


	
