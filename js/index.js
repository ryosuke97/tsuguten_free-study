$(function() {
	// スクロールトップボタンを非表示
	$('.scroll-top').hide();

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

	// スケジュールの+ボタン押下時の設定
	$('.schedule-trigger1').click(function() {
			$('.schedule1').toggleClass('scheduleClick1');
			$('#tr1 td').toggleClass('accshow');
	});
	$('.schedule-trigger2').click(function() {
			$('.schedule2').toggleClass('scheduleClick2');
			$('#tr2 td').toggleClass('accshow');
	});
	$('.schedule-trigger3').click(function() {
		$('.schedule3').toggleClass('scheduleClick3');
		$('#tr3 td').toggleClass('accshow');
	});
	$('.schedule-trigger4').click(function() {
		$('.schedule4').toggleClass('scheduleClick4');
		$('#tr4 td').toggleClass('accshow');
	});
	$('.schedule-trigger5').click(function() {
		$('.schedule5').toggleClass('scheduleClick5');
		$('#tr5 td').toggleClass('accshow');
	});
	$('.schedule-trigger6').click(function() {
		$('.schedule6').toggleClass('scheduleClick6');
		$('#tr6 td').toggleClass('accshow');
	});
	$('.schedule-trigger7').click(function() {
		$('.schedule7').toggleClass('scheduleClick7');
		$('#tr7 td').toggleClass('accshow');
	});
	$('.schedule-trigger8').click(function() {
		$('.schedule8').toggleClass('scheduleClick8');
		$('#tr8 td').toggleClass('accshow');
	});
	$('.schedule-trigger9').click(function() {
		$('.schedule9').toggleClass('scheduleClick9');
		$('#tr9 td').toggleClass('accshow');
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

// スクロールトップボタン押下
$(".scroll-top").click(function () {
	$('body, html').animate({ scrollTop: 0 }, 500);
	return false;
});

// スクロールトップボタンの表示とSP/PC画面幅の設定
$(window).scroll(function () {
	if ($(window).width() >= 769) {
		if ($(this).scrollTop() > 630) {
			$('header').addClass('header-shadow');
			$('.scroll-top').fadeIn();
		} else {
			$('header').removeClass('header-shadow');
			$('.scroll-top').fadeOut();
		}
	} else {
		if ($(this).scrollTop() >= 600) {
			$('header').addClass('header-shadow');
			$('.scroll-top').fadeIn();
		} else {
			$('header').removeClass('header-shadow');
			$('.scroll-top').fadeOut();
		}
	}
});

// スクロールでコンテンツのフェードイン
$(window).on('load',function(){
	$(window).scroll(function (){
		$('.fade-in').each(function(){
			var POS = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > POS - windowHeight + windowHeight/5){
				$(this).css("opacity","1" );
			} else {
				$(this).css("opacity","0" );
			}
		});
	});
});

$(function() {
  var h = $(window).height(); 
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

//全ての読み込みが完了したら実行
$(window).on("load", function () {
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}