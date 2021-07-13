//Solo permite introducir numeros.
function soloNumeros(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

function validateDecimal(valor) {
  var RE = /^\d*(\.\d{1})?\d{0,1}$/;
  if (RE.test(valor)) {
    return true;
  } else {
    return false;
  }
}

function concatenarNombres() {
  var PNombre = document.getElementById("pNombre");

  var SNombre = document.getElementById("sNombre");

  var Apellido = document.getElementById("apellidos");

  var completo = PNombre.value + " " + SNombre.value + " " + Apellido.value;

  document.rellenar.nCompleto.value = completo;
}

function almacenar() {
  concatenarNombres();


}
