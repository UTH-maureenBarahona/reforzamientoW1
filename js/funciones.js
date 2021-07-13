var names=document.getElementsByName('name[]');
//Solo permite introducir numeros.
function soloNumeros(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

function limpiarFormulario() {
    document.getElementById("rellenar").reset();
  }

  function imprimir() {
    window.print();
  }

function calcularEdad() {
    var fecha = document.getElementById("edad");
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
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

function calculos() {
  /*Deducciones por ahorro (10% del sueldo base).
iii. Bonificación (15% sueldo base).
iv. Bono navideño (si es administrativo es de L. 250.00, si es conductor es de
L. 300.00).
Seguro privado (3.5% de (sueldo base – deducciones por ahorro)).
vi. Seguro social (4% del sueldo base).
vii. Sueldo Neto (sueldo base – deducciones por ahorro – seguros +
bonificación).  */

  var SBase = document.getElementById("sBase");
  var DAhorro = Math.floor(SBase.value * 10) / 100;

  document.rellenar.dAhorro.value = DAhorro;

  var Bonificacion =  Math.floor(SBase.value * 15) / 100;

  document.rellenar.bonificacion.value = Bonificacion;

  var Puesto = document.getElementById("puesto");
  var ValBonoNav;

  if (Puesto.value == 1) {
    ValBonoNav = 250;
  } else {
    ValBonoNav = 300;
  }

  document.rellenar.bNavidad.value = ValBonoNav;


//seguro privado
var SPrivado = SBase.value - DAhorro;

var ValSeguroPrivado=(Math.floor(SPrivado * 3.5) / 100);

document.rellenar.sPrivado.value = ValSeguroPrivado;

//Seguro Social
var SSocial = Math.floor(SBase.value * 4) / 100;
document.rellenar.sSocial.value = SSocial;

var SueldoNeto = (SBase.value - DAhorro -(ValSeguroPrivado+SSocial) +(Bonificacion+ValBonoNav));
document.rellenar.sNeto.value = SueldoNeto;


}

function InsertIntoTable()
{
  var TableRow="<tr></tr>";
	for(key=0; key < names.length; key++)
    TableRow = TableRow.substring(0,TableRow.length-5) + "<td>" + names[key].value + "</td>" + TableRow.substring(TableRow.length-5);

  var TrElement = document.createElement("tr");
	TrElement.innerHTML = TableRow;
	document.getElementById("TableBody").appendChild(TrElement);
}

function almacenar() {
  concatenarNombres();
  calculos();
}


