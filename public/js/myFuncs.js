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
    $('.slickTabs').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
        {
            breakpoint: 576, // mobile breakpoint
            settings: {        
                dots:false,
                arrows:true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });
    //fillBreakfast();
});

function fillBreakfast()
{
    clearGrid();
    for(i=0; i<6; i++)
    {
        createProduct(i);
    }
}
function fillLunch()
{
    clearGrid();
    for(i=6; i<11; i++)
    {
        createProduct(i);
    }
}
function fillSnacks()
{
    clearGrid();
    for(i=11; i<15; i++)
    {
        createProduct(i);
    }
}
function fillDinner()
{
    clearGrid();
    for(i=15; i<19; i++)
    {
        createProduct(i);
    }
}