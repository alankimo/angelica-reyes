var Ventana = $(window);

var ContClick = 0;

function MenuIn(){

	$('body, html').css({'overflow':'hidden'});

	$('.MenuMovil').css({'display':'block'});

	$('.MenuMovil').animate({'opacity':'1'}, 'fast', function(){

		$('.Menu').animate({'margin-left':'0'}, 'fast');

		$('.CerrarMenu').animate({'left':'225px'}, 'fast');

		if(Ventana.width() <= 767){

			$('.ContenedorGeneral').css({'min-width': Ventana.width()});

		}

		$('.ContenedorGeneral').animate({'margin-left':'225px'}, 'fast');

	});

};

function MenuExit(){

	$('.Menu').animate({'margin-left':'-255px'}, 'fast');

	$('.CerrarMenu').animate({'left':'0'}, 'fast');

	$('.ContenedorGeneral').animate({'margin-left':'0'}, 'fast', function(){

		$('.MenuMovil').animate({'opacity':'0'}, 'fast', function(){

			$('body, html').css({'overflow':'auto'});

			$('.MenuMovil').css({'display':'none'});

			$('.ContenedorGeneral').css({'min-width':''});

		});

	});

};

function MenuHide(){

	if(ContClick == 0){

		$('#MenuHide ul').css({'height':'195px'});

		ContClick = 1;

	}
	else{

		$('#MenuHide ul').css({'height':'0'});

		ContClick = 0;

	}

};

function MostrarRes(){

	$('.Resenia').animate({'height':'500px'}, 'fast');

}

$(document).ready(function(){	

	$('.BarrasMenu img').click(function(){

		MenuIn();

	});

	$('.CerrarMenu').click(function(){

		MenuExit();

	});

	$('#OpenMenu').click(function(e){

		e.preventDefault();

		MenuHide();

	});

	$('.MostrarRes').click(function(){

		MostrarRes();

	});

});	