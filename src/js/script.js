
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // デフォルトの挙動を無効化

        let header = $('.js-header').height(); // ヘッダーの高さを取得
        let href = $(this).attr('href'); // クリックされたリンクの href 属性を取得
        let target = $(href === '#' ? 'html' : href); // スクロール先の要素を取得
        let position = target.offset().top - header; // スクロール位置を計算

        $('html, body').animate({ scrollTop: position }, 500); // アニメーションでスクロール
    });

    //ハンバーガー
    $('.js-hamburger').on('click', function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
        } else {
            $(this).addClass('is-active')
        };

        $('.js-drawer-menu').fadeToggle();
    });

    //ハンバーガーを開いている時はスクロール出来ないようにする
    let state = false;
    let pos;
    $(".js-hamburger").on("click", function () {
        if (state == false) {
            pos = $(window).scrollTop();
            $("body").addClass("js-fixed").css({ "top": -pos });
            state = true;
        } else {
            $("body").removeClass("js-fixed").css({ "top": 0 });
            $(window).scrollTop(pos);
            state = false;
        }
    });

    //hamburgerメニュー内のリンクをクリックした時にも閉じる
    $(".js-drawer a[href]").on("click", function () {
        $(".js-hamburger").trigger("click");
    });


    //swiper
    let mySwiper = new Swiper('.swiper', {
        // 以下にオプションを設定
        loop: true, //最後に達したら先頭に戻る
    });

    $('.js-accordion-question').on('click', function () {
        $(this).next('.js-accordion-answer').slideToggle();
        $(this).children('.js-accordion-bars').toggleClass('is-active');
    });

    $('.js-contact-form').on('submit', function (e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます。内容を送信しました。');
        this.reset();
    });

});
