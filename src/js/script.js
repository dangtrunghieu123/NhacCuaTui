$(document).ready(function () {
    //ad
    $('.ad #hide_ad').click(function(){
        $('.ad').slideToggle();
        $('.main').css("padding-top",'60px');
     })
    //slider
    $('#owl-carousel1').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        dot: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
 
    $('.img-small > ul > li').hover(function () {
        var imgSrc = $(this).find('img').attr('src');
        var newSRC = imgSrc.replace('_org','_145');
        //replace('a','b') :thay thế chuỗi a bằng chuỗi b;
        $('.img-big > img').attr('src',newSRC);
    }, function () {
        // out
    }
    );
});