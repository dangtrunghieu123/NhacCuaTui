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
        animateIn:'flipInX',
        animateOut:'flipOutX',
        autoplay:true,
        autoplayHoverPause:true,
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
    });

    //bảng xếp hạng
    $('.list-tabs ul li').click(function (e) { 
        e.preventDefault();
        $('.list-tabs ul li a').removeClass('active');
        $(this).find('a').addClass('active');
        console.log($(this).index());//index() lấy vị trí của phần tử
        var index = $(this).index();
        $('.tab-content .tab').hide();
        // $('.tab-content .tab').eq(index).removeClass('active');
        // $('.tab-content .tab').eq(index).addClass('active');
        $('.tab-content .tab').eq(index).show();
    });

    $('.list-tabss ul li').click(function (e) { 
        e.preventDefault();
        $('.list-tabss ul li a').removeClass('active');
        $(this).find('a').addClass('active');
        console.log($(this).index());//index() lấy vị trí của phần tử
        var index = $(this).index();
        $('.tab-contents .tabs').hide();
        // $('.tab-content .tab').eq(index).removeClass('active');
        // $('.tab-content .tab').eq(index).addClass('active');
        $('.tab-contents .tabs').eq(index).show();
    });

    $('#owl-carousel2').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
});