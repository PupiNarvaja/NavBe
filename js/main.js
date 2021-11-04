$(document).ready(function(){

    
    $('.owl-carousel').owlCarousel({
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
