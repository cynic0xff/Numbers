
var NRT = {
        Moxi: {
            //settings
            delay: 500,     //how long the before the numbers start rotating
            DEBUG: false,

            numbers: {
                agents: 88000,
                offices: 3000,
                country: 49,
                page: 'trigger'
            }
        }
};

$(document).ready(function() {
    var targetOffset = $('#' + NRT.Moxi.numbers.page).offset().top;
    var $w = $(window).scroll(function(){

        if ( $w.scrollTop() >= 0) {
                //call numberRotate
                rotateNumbers(NRT.Moxi.numbers);
            }
    });
});