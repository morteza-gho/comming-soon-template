(function ($) {

   "use strict";

   //ROUNDED TIMES COUNTDOWN
   if (isExists('#rounded-countdown')) {
      var remainingSec = $('.countdown').data('remaining-sec');
      $('.countdown').ClassyCountdown({
         theme: "flat-colors-very-wide",
         end: $.now() + remainingSec
      });
   }

   //NORMAL TIMES COUNTDOWN
   if (isExists('#normal-countdown')) {
      var date = $('#normal-countdown').data('date');
      $('#normal-countdown').countdown(date, function (event) {
         var $this = $(this).html(event.strftime(''
            + '<div class="time-sec"><h3 class="main-time">%D</h3> <span>Days</span></div>'
            + '<div class="time-sec"><h3 class="main-time">%H</h3> <span>Hours</span></div>'
            + '<div class="time-sec"><h3 class="main-time">%M</h3> <span>Mins</span></div>'
            + '<div class="time-sec"><h3 class="main-time">%S</h3> <span>Sec</span></div>'));
      });
   }


   $('a[href="#"]').on('click', function (event) {
      return;
   });

   // COUNTDOWN TIME

   countdownTime();

   // Circular Progress Bar

   var isAnimated = false;


   $('#submit').click(function (e) {
      e.preventDefault();

      let value = $('#email-input').val();
      if (!value || value === '') {
         alert('Enter Your Email Address')
      } else {

         $.post("http://peramoon.com/api/submit_email", {email: value},
            function (result) {
               alert(result)
            }
         );
      }

   });


})(jQuery);


function countdownTime() {

   if (isExists('#clock')) {
      $('#clock').countdown('2018/01/01', function (event) {
         var $this = $(this).html(event.strftime(''
            + '<div class="time-sec"><span class="title">%D</span> days </div>'
            + '<div class="time-sec"><span class="title">%H</span> hours </div>'
            + '<div class="time-sec"><span class="title">%M</span> minutes </div>'
            + '<div class="time-sec"><span class="title">%S</span> seconds </div>'));
      });
   }
}

function isExists(elem) {
   if ($(elem).length > 0) {
      return true;
   }
   return false;
}