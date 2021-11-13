// ========== Carousels config ==========
$(document).ready(function(){
    $('.profesionales-carousel').owlCarousel({
        // startPosition: 1,
        fluidSpeed: true,
        stagePadding: 160,
        center: false,
        items:1,
        loop:false,
        // margin:250,
        dots: false,
        nav:true,
        navText: ["<img src='./media/prevArrow.svg' alt='boton previo' aria-label='boton previo'/>","<img src='./media/nextArrow.svg' alt='boton siguiente' aria-label='boton previo'/>"],
        responsive:{
            100:{
                items:3
            }
        }
    });
});
if (window.matchMedia("(max-width: 768px)").matches) {
    $('.profesionales-carousel').owlCarousel({
        fluidSpeed: true,
        stagePadding: 69,
        center: false,
        items:1,
        loop:false,
        dots: false,
        nav:true,
        navText: ["<img src='./media/prevArrow.svg' alt='boton previo' aria-label='boton previo'/>","<img src='./media/nextArrow.svg' alt='boton siguiente' aria-label='boton previo'/>"],
        responsive:{
            100:{
                items:3
            }
        }
    });
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    $('.profesionales-carousel').owlCarousel({
        fluidSpeed: true,
        stagePadding: 92,
        center: false,
        items:1,
        loop:false,
        dots: false,
        nav:true,
        navText: ["<img src='./media/prevArrow.svg' alt='boton previo' aria-label='boton previo'/>","<img src='./media/nextArrow.svg' alt='boton siguiente' aria-label='boton previo'/>"],
        responsive:{
            100:{
                items:3
            }
        }
    });
}
if (window.matchMedia("(max-width: 1440px)").matches) {
    $('.profesionales-carousel').owlCarousel({
        fluidSpeed: true,
        stagePadding: 130,
        center: false,
        items:1,
        loop:false,
        dots: false,
        nav:true,
        navText: ["<img src='./media/prevArrow.svg' alt='boton previo' aria-label='boton previo'/>","<img src='./media/nextArrow.svg' alt='boton siguiente' aria-label='boton previo'/>"],
        responsive:{
            100:{
                items:3
            }
        }
    });
}




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
// ======= Sweet alert 2 ======
$(document).ready(function() {
    $(".inicioSesionBtn").click(() =>popUps());
    $(".registrarmeBtn").click(() =>popUps());
    $(".descargaBtn").click(() =>popUps());
    $(".item button").click(() =>popUps());
    $(".inscribirYaBtn").click(() =>popUps());
    $(".inscribirGratisBtn").click(() =>popUps());
});

popUps = () => {Swal.fire({  
    title: '¡Lanzamiento muy pronto!',
    imageUrl: './media/logo-smartphone.svg',
    imageWidth: '75px',
    text: '- Equipo Navbe.',
    confirmButtonText:'¡Genial!',
    confirmButtonColor: '#6000D9'
})};

// ====== Changes mobile navbar links ======
if (window.matchMedia("(max-width: 700px)").matches) {
    $(".navbar ul").empty();
    $(".navbar ul").prepend(`<a href="#carousel3dotsMobile"><img src="./media/aprendo.svg" alt="imagen de la seccion aprendo"><li>Aprendo</li></a>
    <a href="#carousel3dotsMobile"><img src="./media/consulto.svg" alt="imagen de la seccion consulto"><li>Consulto</li></a>
    <a href="#carousel3dotsMobile"><img src="./media/comunidad.svg" alt="imagen de la seccion comunidad"><li>Comunidad</li></a>
    <a href="#planes"><img src="./media/planes.svg" alt="imagen de la seccion planes"><li>Planes</li></a>`);
};