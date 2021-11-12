$(document).ready(function(){

    
    $('.profesionales-carousel').owlCarousel({
        center: true,
        items:1,
        loop:false,
        // margin:250,
        dots: false,
        nav:true,
        navText: ["<span><</span>","<span>></span>"], //["<img src='./media/backBtn.svg'/>","<img src='./media/backBtn.svg'/>"]
        responsive:{
            100:{
                items:4
            }
        }
    });

});


$(document).ready(function(){
    $('.littleCarouselMobile--container').owlCarousel({
        center: true,
        items:1,
        loop:true, 
        dots: false,
        nav: false,
        autoplay: false,
        // centerPadding: '60px',
        responsive:{
            0:{
                items:2
            },
            400:{
                items:2.5
            },
            600:{
                items:3.5
            },
            1000:{
                items:5
            },         
        }
    });
});