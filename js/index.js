$(function() {  

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



// $('a[href^="#"]').click(function() {
// 	var headerHight = 0; //ヘッダーの高さ
// 	if ( !$(".fixed-header").is(":visible") ) {// 固定するクラスが見つからない(固定されていない場合は)
// 			headerHight = $(".nav").height();// スクロール後に固定されるナビの高さをヘッダーの高さにする
// 	}
// 	var speed = 800; // スクロールの速度ミリ秒
// 	var href= $(this).attr("href");// アンカーの値取得
// 	var target = $(href == "#" || href == "" ? 'html' : href);// 移動先を取得
// 	var position = target.offset().top-headerHight;// 移動先を数値で取得してヘッダーの高さ分ずらす
// 	$('body,html').animate({scrollTop:position}, speed, 'easeOutExpo');
// 	return false;
// });


$('a[href^="#"]').click(function() {
  // スクロールの速度
  var speed = 400; // ミリ秒で記述
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top -30;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});