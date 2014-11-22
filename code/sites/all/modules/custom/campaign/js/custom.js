// the function we call when we click on each img tag
function fancyBoxMe(e) {
    var numElemets = jQuery("#myContainer img").size();
    if ((e + 1) == numElemets) {
        nexT = 0
    } else {
        nexT = e + 1
    }
    if (e == 0) {
        preV = (numElemets - 1)
    } else {
        preV = e - 1
    }
    var tarGet = jQuery('#myContainer img').eq(e).data('href');
    jQuery.fancybox({
        href: tarGet,
        helpers: {
            title: {
                type: 'inside'
            }
        },
        afterLoad: function () {
            this.title = 'Image ' + (e + 1) + ' of ' + numElemets + ' :: <a href="javascript:;" onclick="fancyBoxMe(' + preV + ')">prev</a>&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="fancyBoxMe(' + nexT + ')">next</a>'
        }
    }); // fancybox
} // fancyBoxMe