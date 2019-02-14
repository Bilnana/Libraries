// jQuery(($) => {
//   const jsLoaded = () => {
//     console.log('js is loaded');
//   }

//   /* ====== DOCUMENT READY ====== */
//   $(document).ready(() => {
//     jsLoaded ();

//   });

//    /* ====== resize ====== */
//   // $(window).resize(() => {
 
//   // });

//   /* ====== scroll ====== */
//   // $(window).scroll((e) => {
  
//   // });
 
// });

  //ex.
  // window.onbeforeunload = confirmExit;
  //   function confirmExit()
  //   {
  //   return "Are you sure you want to leave this page?";
  //   }


$( document ).ready(function() {
  console.log('js is loaded');

  popupAction ();
  // $(window).on('unload', popAction)
});

function popupAction () {
  var popM = $('.popup');
  var cancelPop = $('.btn-cancel');
  
  //Button on click
  $(document).on('mouseleave', function () {
    $(popM).addClass('open');
    $('.overlay-pop').addClass('open');
  }) 

  //Cancel button
  $(cancelPop).on('click', function () {
    $(popM).removeClass('open');
    $('.overlay-pop').removeClass('open');;
  })
}
