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


$( document ).ready(function() {
  console.log('js is loaded');


  $('.link-btn').on('click', function () {
    Cookies.set('theme', 'green', {path : '/'});
  })
  // window.onbeforeunload = confirmExit;
  //   function confirmExit()
  //   {
  //   return "Are you sure you want to leave this page?";
  //   }
});
