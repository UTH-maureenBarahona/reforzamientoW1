//Solo permite introducir numeros.
function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

  function concatenarNombres(){
      var PNombre = document.getElementById('pNombre') ;
      console.log(pNombre);
      var SNombre =document.getElementById('sNombre');

      console.log(SNombre);
      
      var completo = PNombre.value+ " " + SNombre.value; 

      console.log(completo);
      document.rellenar.nCompleto.value =completo;
  }

  function almacenar(){
  var numId = document.getElementById('numId');


  }

