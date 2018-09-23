// Slider for Kitchen Logos

$(document).ready(function(){
    $('.kitchen-logos').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 980, // tablet breakpoint
            settings: {        
                dots:false,
                arrows:false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {        
                dots:false,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });
});