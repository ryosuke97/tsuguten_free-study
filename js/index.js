$(function() {
	// スクロールトップボタンを非表示
	$('.scroll-top').hide();

	console.log(window.scrollTop);

  /* ハンバーガーボタンのオーバーレイ */
  var overlayFlg = false;
  $('.menu-trigger').click(function() {
    // メニューが表示されていない状態
    if (overlayFlg == false) {
      // ハンバーガーボタンのアニメーション
      $('.menu1').toggleClass('menuclick1');
      $('.menu2').toggleClass('menuclick2');
      $('.menu3').toggleClass('menuclick3');
      // ハンバーガーボタンをオーバーレイに隠れないようにする
			$('.menu-trigger').toggleClass('zindex1000');
			// グロナビのトグル
			$('nav').toggleClass('open');
      overlayFlg = true;
    }
    else if (overlayFlg == true) {
      // メニューが表示されている状態
      $('.menu1').toggleClass('menuclick1');
      $('.menu2').toggleClass('menuclick2');
      $('.menu3').toggleClass('menuclick3');
      $('nav').removeClass('open');
      $('#overlay').fadeOut();
			overlayFlg = false;
    }
	});
	
	// SP_グロナビ内メニュー押下でメニューを非表示にする
	$('nav a').click(function() {
		$('.menu1').toggleClass('menuclick1');
		$('.menu2').toggleClass('menuclick2');
		$('.menu3').toggleClass('menuclick3');
		$('nav').removeClass('open');
		overlayFlg = false;
	});

});

// ページ内リンク遷移
$('a[href^="#"]').click(function() {
  // スクロールの速度
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top -30;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

$(".scroll-top").click(function () {
	$('body, html').animate({ scrollTop: 0 }, 500);
	return false;
});

// スクロールトップボタンの表示設定
$(window).scroll(function () {
	console.log(window.scrollY);
	if ($(window).width() >= 769) {
		if ($(this).scrollTop() > 630 ) {
			$('header').addClass('header-shadow');
			$('.scroll-top').fadeIn();
		} else {
			$('header').removeClass('header-shadow');
			$('.scroll-top').fadeOut();
		}
	} else {
		if ($(this).scrollTop() >= 600 ) {
			$('header').addClass('header-shadow');
			$('.scroll-top').fadeIn();
		} else {
			$('header').removeClass('header-shadow');
			$('.scroll-top').fadeOut();
		}
	}
});
