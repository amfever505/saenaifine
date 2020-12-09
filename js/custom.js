function closeModal(close){
    const modal = document.getElementById('popup-info');
    modal.style.display = close;
}

// selectCharacter function

const CHARACTERS = {
    1 : "tomoya_aki",
    2 : "megumi_kato",
    3 : "eriri_spencer_sawamura",
    4 : "utaha_kasumigaoka",
    5 : "michiru_hyodo",
    6 : "izumi_hashima",
    7 : "iori_hashima",
    8 : "diagram"
}
let preCharacter = CHARACTERS[1];
function selectCharacter(n){
    const name = CHARACTERS[n];
    document.getElementById(preCharacter).style.display = "none";
    document.getElementById(name).style.display = "flex";
    preCharacter = name;
}

// header close
const nav = document.getElementById('navtext');
const $navtw = $(".hd__glnav__sub__twitter");

$(window).on("scroll", function(){
    let scrollDistance = $(window).scrollTop();
    let $header = $(".js-header");
    if(scrollDistance > 200){
        $header.addClass("is-scroll");
        nav.style.color = '#3d3e3f';
        $navtw.css('color', '#3d3e3f');
        $navtw.css('background', "url('./img/common/icon_tw_black.png') left center no-repeat");
    }else{
        $header.removeClass("is-scroll");
        nav.style.color = '#fff';
        $navtw.css('color', '#fff');
        $navtw.css('background', "url('./img/common/icon_tw_white.png') left center no-repeat");

    }
})
function menuHandler(){
    let $header = $(".js-header");
    let $headerHandler = $(".header-handler")
    let $headerScrolled = $(".is-scroll");
    let $headerMenu = $(".headerMenu");

    // if on
    if($header.hasClass('is-scroll') && $header.hasClass('headerMenu') ){
        $header.removeClass("headerMenu");
        $headerHandler.removeClass("header-handler__close");
    }
    //if off
    if($headerScrolled.length == 1 && $headerMenu.length == 0 ){
        $header.addClass("headerMenu");
        $headerHandler.addClass("header-handler__close");
    }
}

//page close
$(document).ready(function() {
    if($("#maintenance").length > 0){
        $("<div style='font-size:80px;padding-top: 120px;'><p>このページは</p><p>ただいまメンテナンス中</p></div>").appendTo('#maintenance');
    }
});