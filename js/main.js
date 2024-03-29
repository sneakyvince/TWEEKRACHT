$('.door').click(function () {
    $('.door').toggleClass('doorOpen');
});

$('.door2').click(function () {
    $('.door2').toggleClass('doorOpen');
});

$('.door3').click(function () {
    $('.door3').toggleClass('doorOpen');
});

function leftArrowPressed() {
    $('.door').toggleClass('doorOpen');

    setTimeout(function () {
        window.location.href = $('.pageDirection.left').attr('id') + '.html';
    }, 2000);

}

function rightArrowPressed() {
    $('.door2').toggleClass('doorOpen');

    setTimeout(function () {
        window.location.href = $('.pageDirection.right').attr('id') + '.html';
    }, 2000);
}

function upArrowPressed() {
    $('.door3').toggleClass('doorOpen');

    setTimeout(function () {
        window.location.href = $('.pageDirection.up').attr('id') + '.html';
    }, 2000);
}

document.onkeydown = function (evt) {

    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
    }
};