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
      // 最初にメニューリストは隠す
      // $('#olWorks').css({display:'none'});
      // $('#olArtist').css({display:'none'});
      // $('#olAbout').css({display:'none'});
      // オーバーレイを表示する
      $('#overlay').slideToggle(500, function() {
        $('#olWorks').slideToggle(500);
        $('#olArtist').delay(100).slideToggle(500);
        $('#olAbout').delay(200).slideToggle(500);
      });
      overlayFlg = true;
    }
    else if (overlayFlg == true) {
      // メニューが表示されている状態
      $('.menu1').toggleClass('menuclick1');
      $('.menu2').toggleClass('menuclick2');
      $('.menu3').toggleClass('menuclick3');
      $('.menu-trigger').removeClass('zindex1000');
      $('#overlay').fadeOut();
      overlayFlg = false;
    }
  });

	$('.menu-trigger').click(function(){
		// $header.toggleClass('open');
	});


/*-----------------------------------------------*/
/* worksページ */
/*-----------------------------------------------*/
  // アコーディオン
  $('#acMenu dt').on('click', function() {
    $(this).next().slideToggle();
  });



});



