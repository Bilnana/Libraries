//ES6 SINTAX
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
  popupAction ();
  firstButtonClick ();
  deleteCookies ();
});

function popupAction () {
 
  //On mouseleave window action
  $(document).on('mouseleave', function () {

    var cookieExist = Cookies.get('checkLeaveing');
    var popM = $('.popup');

    if (!cookieExist) {
      var date = new Date();
      date.setTime(date.getTime() + (15 * 1000));

      Cookies.set( 'checkLeaveing', 'user', {
        expires: date,
      });

      //Add open class to open popup window
      $('.popup').addClass('open');
      $('.overlay-pop').addClass('open');

      console.log('NE postoji');
    } else {
      console.log('postoji');
      $('.popup').removeClass('open');
      $('.overlay-pop').removeClass('open');
    }
  }) 

  //Cancel button
  $('.btn-cancel').on('click', function () {
    $('.popup').removeClass('open');
    $('.overlay-pop').removeClass('open');
  })
}

function firstButtonClick () {
  $('.c-btn--primary').on('click', function () {
    console.log(Cookies.get());
  })
}

function deleteCookies () {
  $('.c-btn--secondary').on('click', function () {
    Cookies.remove('checkLeaveing');
  })
}
