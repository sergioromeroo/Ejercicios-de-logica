function range_vision(number) {
    // Inicializar una variable para almacenar el dígito con el valor de visualización más bajo
    let lowest_digit = 9;
    // Mientras el número sea mayor que 0
    while (number > 0) {
      // Obtener el último dígito del número usando el operador de módulo (%)
      let last_digit = number % 10;
      // Si el último dígito es menor que el dígito más bajo, actualizar el dígito más bajo
      if (last_digit < lowest_digit) {
        lowest_digit = last_digit;
      }
      // Eliminar el último dígito del número usando el operador de división entera (Math.floor())
      number = Math.floor(number / 10);
    }
    // Si el dígito más bajo es 1, devolver true
    if (lowest_digit === 1) {
      return true;
    }
    // Si no, devolver false
    else {
      return false;
    }
  }
  module.exports=range_vision()