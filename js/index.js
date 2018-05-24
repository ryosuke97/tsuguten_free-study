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

	// $('.menu-trigger').click(function(){
		// $header.toggleClass('open');
	// });


/*-----------------------------------------------*/
/* worksページ */
/*-----------------------------------------------*/
  // アコーディオン
  $('#acMenu dt').on('click', function() {
    $(this).next().slideToggle();
  });



});



