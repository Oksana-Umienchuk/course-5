import $ from 'jquery';
import 'slick-carousel';

// $('.slider').slick();

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.slider-arrivals').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
});

$('.slider-partners').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});
