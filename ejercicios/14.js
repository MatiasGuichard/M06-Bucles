function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  var HDP = 0;
  if(num1 > num2 && num1 > num3 && num1 > 0) HDP = 1;
  if (num1 < 0 || num2 < 0 || num3 < 0) HDP = 2;
  if (num3 > num1 && num3 > num2) HDP = 3;
  if (num1==0 && num2 == 0 && num3 == 0) HDP = 4;

  switch(HDP) {
  case 1:
    return "Numero 1 es mayor y positivo";
  case 2:
    return "Hay negativos";
  case 3:
   return num3 +1 ;
  case 4:
    return 'Error';
  default:
    return false;
  }
}

module.exports = operadoresLogicos;
