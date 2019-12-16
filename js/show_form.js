$(document).ready(function () {
    $('.naruci-btn').click(function () {
        $('#usluge-forma').slideDown(1500);
        $('#radio').delay(1500).slideDown(500);
    });


    $('.forma-btn-cancel').click(function () {
        $('#radio').slideUp(100);
        $('#usluge-forma').slideUp(1500);

    });
})


$(document).ready(function () {
    $('.burger-meni-toggle').click(function () {
        $('nav').slideToggle(1500);
        $(this).toggleClass('close-burger-meni');
    })
})


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {

            $('.upArrow').fadeIn(1000);
        } else {
            $('.upArrow').fadeOut(1000);

        }
    });
})