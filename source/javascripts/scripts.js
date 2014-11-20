
$(document).on('ready', function(){

	// BARRA LATERAL IZQUIERDA

	$('#sidebar').hover(function(){
		$(this).addClass('sidebar');
		$('.information').delay(200).fadeIn();
	}, function(){
		$(this).removeClass('sidebar');
		$('.information').hide();
	});


	// MENÚ DE USUARIO

	$('#user-options, #user-options-menu').hover(function(){
		$('#user-options-menu').show();
	}, function(){
		$('#user-options-menu').hide();
	});


	// BARRA LATERAL DERECHA

	$('#chatbar-out').on('click', function(){
		$('#chatbar').hide();
	});

    $('body').on('click', function() {
        $('#chatbar').hide();
    });
     
    $('#user-options-menu li a, #interviews').on('click', function(e) {
        $('#chatbar').show();
        e.stopPropagation();
    });


	// TABLA DESPLEGABLE

	$('.row').on('click', function(){
        var num = $(this).attr('rel');
        $("#" + num).toggle();
    });


    $('.comment').on('focus', function(){
    	valor = $(this).val();
    	if(valor=="Write the reason why you can't accept."){
    		$(this).val('');
    	}
    });

    $('.comment').on('blur', function(){
    	valor = $(this).val();
    	if(valor==""){
    		$(this).val("Write the reason why you can't accept.");
    	}
    });



	
});