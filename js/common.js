(function (win, doc) {
	var max = 720;

    var setFontSize = function () {
        var myHTML = doc.querySelector("html");
        var myWidth = doc.documentElement.clientWidth > max ? max : doc.documentElement.clientWidth;

        myHTML.style.fontSize = 100 * myWidth / max  + 'px';
    };

    win.onresize = function () {

        setFontSize();

    };
    setFontSize();
    
})(window, document);

$(function(){
	/*bomb-box S*/
    $('.bomb-btn').click(function(){
        $('.bomb-box').show();
    });
    $('.bomb-bg').click(function(){
        $('.bomb-box').hide();
    });
    /*bomb-box E*/
})