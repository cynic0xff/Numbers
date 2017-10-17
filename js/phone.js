var phone = {
  count: 99,
  page: 'phone_trigger'
}

$(document).ready(function() {
    var targetOffset = $('#' + phone.page).offset().top;
    var $w = $(window).scroll(function(){

        if ( $w.scrollTop() >= targetOffset) {
                //call numberRotate
                rotateNumbers(phone);
            }
    });
});