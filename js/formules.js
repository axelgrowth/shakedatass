function affichage (formule){
	textvar='';
	if (document.getElementById('mobilematthias').offsetWidth==0){

	if (typeof last !== 'undefined'){
		last.animate({marginLeft:"0"},500);
		lasttriangle.animate({marginLeft:"0"},500);
		$('#'+last.attr('id')+'info').fadeIn(250);
	}else{last='none'}

	if(formule=='matthias' && (last!=$('#matthias') || typeof last=='undefined')){


		last=$('#matthias')
		lasttriangle=$('#matthiastriangle')
		textvar =document.getElementById('mobilematthias').innerHTML;
        $('#matthias').animate({marginLeft:"50px"},500);
        $('#matthiastriangle').animate({marginLeft:"50px"},500);
        $('#matthiasinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	
		}
		
        
	else if(formule== 'euler' && (last!=$('#euler')|| typeof last=='undefined')){

		
		last=$('#euler')
		lasttriangle=$('#eulertriangle')
		textvar =document.getElementById('mobileeuler').innerHTML;

		$('#euler').animate({marginLeft:"50px"},500);
        $('#eulertriangle').animate({marginLeft:"50px"},500);
        $('#eulerinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	}

	else if(formule== 'mesure' && (last!=$('#mesure')|| typeof last=='undefined')){
		last=$('#mesure')
		lasttriangle=$('#mesuretriangle')
		textvar =document.getElementById('mobilemesure').innerHTML;

		$('#mesure').animate({marginLeft:"50px"},500);
        $('#mesuretriangle').animate({marginLeft:"50px"},500);
        $('#mesureinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	}else if(formule== 'vacances' && (last!=$('#vacances')|| typeof last=='undefined')){
		last=$('#vacances')
		lasttriangle=$('#vacancestriangle')
		textvar =document.getElementById('mobilevacances').innerHTML;

		$('#vacances').animate({marginLeft:"50px"},500);
        $('#vacancestriangle').animate({marginLeft:"50px"},500);
        $('#vacancesinfo').fadeOut(250);
        $('#description_desktop').fadeOut(250);
        document.getElementById('description_desktop').innerHTML= textvar;	
		$('#description_desktop').fadeIn(500);	

	 }
	}
}