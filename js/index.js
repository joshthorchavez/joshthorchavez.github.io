$(document).ready(function () {

    var screen = $(window)    

    if (screen.width < 1024) {
        $("#rightPage").hide();
    }
    else {

        $("#rightPage").show();
    }

});