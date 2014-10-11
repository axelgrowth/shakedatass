(function ($) {

    $.fn.isOnScreen = function(x, y){

        if(x == null || typeof x == 'undefined') x = 1;
        if(y == null || typeof y == 'undefined') y = 1;

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var height = this.outerHeight();
        var width = this.outerWidth();

        if(!width || !height){
            return false;
        }

        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;

        var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        if(!visible){
            return false;
        }

        var deltas = {
            top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
            bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
            left : Math.min(1, ( bounds.right - viewport.left ) / width),
            right : Math.min(1, ( viewport.right - bounds.left ) / width)
        };

        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

    };

})(jQuery);

function checkScreen (){

	if($("#presentation").isOnScreen()){

		document.getElementById('presentationLink').style.borderBottom = 	"2px solid #22313F"
		document.getElementById('formulesLink').style.borderBottom = 	"none"
		document.getElementById('pointsLink').style.borderBottom = 	"none"
        document.getElementById('contactsLink').style.borderBottom =  "none"
        document.getElementById('annalesLink').style.borderBottom =    "none"
	}else if ($("#formules").isOnScreen()) {
        document.getElementById('formulesLink').style.borderBottom =    "2px solid #22313F"
        document.getElementById('presentationLink').style.borderBottom =    "none"
        document.getElementById('pointsLink').style.borderBottom =  "none"
        document.getElementById('contactsLink').style.borderBottom =  "none"
        document.getElementById('annalesLink').style.borderBottom =    "none"
        if (typeof last=='undefined'){
            window.setTimeout(affichage('matthias'),2000);
        }
	}else if ($("#pointsforts").isOnScreen()) {
        document.getElementById('pointsLink').style.borderBottom =    "2px solid #22313F"
        document.getElementById('formulesLink').style.borderBottom =    "none"
        document.getElementById('presentationLink').style.borderBottom =  "none"
        document.getElementById('contactsLink').style.borderBottom =  "none"
        document.getElementById('annalesLink').style.borderBottom =    "none"
	}else if ($("#contact").isOnScreen()) {
        document.getElementById('contactsLink').style.borderBottom =    "2px solid #22313F"
        document.getElementById('formulesLink').style.borderBottom =    "none"
        document.getElementById('presentationLink').style.borderBottom =  "none"
        document.getElementById('pointsLink').style.borderBottom =  "none"
        document.getElementById('annalesLink').style.borderBottom =    "none"
    }else if ($("#annales").isOnScreen()) {
        document.getElementById('contactsLink').style.borderBottom =    "none"
        document.getElementById('formulesLink').style.borderBottom =    "none"
        document.getElementById('presentationLink').style.borderBottom =  "none"
        document.getElementById('pointsLink').style.borderBottom =  "none"
        document.getElementById('annalesLink').style.borderBottom =    "2px solid #22313F"
    }

    if(document.getElementById('mobilematthias').offsetWidth>0){
        $('#description_desktop').fadeOut(5);
        $('#eulerinfo').fadeOut(250);
        $('#matthiasinfo').fadeOut(250);
        $('#mesureinfo').fadeOut(250);
        $('#vacancesinfo').fadeOut(250);

    }
};

checkScreen();
window.onscroll= checkScreen;

function linksjob(type){

    if (type == 'cours_offert'){
        ga('send', 'event', 'bouton', 'Cours Offert', 'centre');
        window.setTimeout(300);
        window.location.href ="https://eulerprepa.wufoo.com/forms/m1g1ffgc0b5t4sd/";
    }else {
        ga('send', 'event', 'bouton', 'Renseignements', 'bas');
        window.location.href =("https://eulerprepa.wufoo.com/forms/m1g1ffgc0b5t4sd/");
    }



}