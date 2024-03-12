setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

//ハンバーガーメニュー
$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

//スクロールをしたら1度だけアニメーションをする設定
$(".about ,.ourservices ,.news ,.company-wrap ,.contact").on(
  "inview",
  function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass("active"); //クラス名が付与
    }
  }
);
