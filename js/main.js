$(function () {

    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_width').addClass('on');
        } else {
            $('.header_width').removeClass('on');
        }

    });


    $('.main_video').YTPlayer({
        videoURL: 'https://youtu.be/1WtTsFIu93s',
        containment: '.video_wrap',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });







})