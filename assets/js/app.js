  	  var idCont = 0;
  $(document).ready(function(){

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('#btn').click(function(){
     var name = $('#icon_prefix').val();
    $('#icon_prefix').val(""); //dejamos vacio ,LO Reiniciamos
    var phone = $('#icon_telephone').val();
    $('#icon_telephone').val("");
    var email = $('#email').val();
    $('#email').val("");
    var cont = $('#cont');
    
    //contenedor.append('<div><input type="checkbox">' + '<p>' + name + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div>');
  
    cont.append('<section id="pin_ '+ idCont +'" class="visaka container" >' +  //agregamos contador 
 	'<div class="section">' +
      '<div class="row">' +
       ' <div class="col s9">' +
         ' <h5>'+ name + '</h6>' +
         ' <div class="divider"></div>' +
          '<P>' + phone + '</P>' +
          '<P>' + email + '</P>' +
        '</div>' +
       ' <div class="col s3">' +
         ' <a class="waves-effect waves-light btn" id="deletBox" > <i class="material-icons trash">delete_forever</i></a>' +
          
       ' </div>' +
     ' </div>' +
  '  </div>' +
  '</section>');

    deletBoxx();

    	//Evento a la barra de basura para eliminar  contacto
      
  });
     function deletBoxx(){

   $('.trash').click(function(){
       //	alert('ayuda');
       $(this).parent().parent().parent().remove();
   		});

  };
});

// La funcionalidad de tu proyecto
