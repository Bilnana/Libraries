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

var termsAjaxConfirm = function() {

  // Finding pages that does not need tersm and cond. modal and store them in vars.
  var $body = $('body'),
    errorPage = $body.find('.error-page'),
    pathLoc = window.location.pathname,
    artPapers = $('.page-company-contributions-articles-and-white-papers').length,
    urlCheck = "/terms-and-conditions/check";

  // Checking if user is currently on page that does not need modal and doing nothing
  if (pathLoc == '/about/contact-savvy-investor' ||
    pathLoc == "/about/terms-and-conditions" ||
    pathLoc == "/about/terms-and-conditions/privacy-policy" ||
    pathLoc == "/about/terms-and-conditions/refund-policy" ||
    pathLoc == "/about/terms-and-conditions/cookie-policy" ||
    pathLoc == "/about/terms-and-conditions/changes-to-policies" ||
    errorPage.length) {} else {
    // check if user is logged in
    if ($body.hasClass('user-logged-in')) {
      // else calling modal on every other page

      $.ajax({
        url: urlCheck,
        type: "POST",
        dataType: "json"
      }).done(function(response) {
        if (response == 0) {
          var origin = document.location.origin;

          $body.addClass('modal-open');

          $('<div class="terms-and-conditions">').appendTo($body).load(origin + '/terms-and-conditions/confirm .savvy-terms-conditions-confirm').dialog({
            modal: true,
            title: 'Terms and conditions',
            autoOpen: true,
            dialogClass: 'buttons',
            resizable: false,
            draggable: false,
            position: {
              my: 'top',
              at: 'top+200'
            },
            close: function(event, ui) {
              $(this).remove();
              $body.removeClass('modal-open');
            }
          });
        }
      });
    }

    if ($body.hasClass('not-logged-in')) {
      //console.log('Ajax request');

      $(document).on('mouseleave', function () {
        $.ajax({
          url: urlCheck,
          type: "POST",
          dataType: "json"
        }).done(function(response) {

          $body.addClass('modal-open');
          alert('Ajax request');
          // if (response == 0) {
          //  // var origin = document.location.origin;
          
          // }
        });
      })
    }
  }
}
