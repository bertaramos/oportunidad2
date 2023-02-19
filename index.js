
function comprobar(){
  var nombre = document.getElementById("nombre").value;
  var clave1 = document.getElementById("clave1").value;
  var clave2 = document.getElementById("clave2").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;

  if (nombre == "" || clave1 == "" || clave2 == "" || telefono == "" || correo == "") {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  if (clave1 != clave2) {
    alert("Las contraseñas no coinciden. Por favor, vuelva a intentarlo.");
    return false;
  }

  var formatoTelefono = /^[0-9]{9}$/;
  if (!formatoTelefono.test(telefono)) {
    alert("El número de teléfono debe tener un formato de 9 dígitos. Por favor, vuelva a intentarlo.");
    return false;
  }

  var formatoCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!formatoCorreo.test(correo)) {
    alert("El correo electrónico debe tener un formato válido. Por favor, vuelva a intentarlo.");
    return false;
  }
  alert("Inscripción completada. ¡Gracias por registrarte!");
  return true;
}