//Solo permite introducir numeros.
function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

  function almacenar(){
 var numId = document.getElementById('numId');
 

  }