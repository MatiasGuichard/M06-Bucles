function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var contador = 1;
  for (var i = a; i <= b; i++) {
    contador = contador * i;
  }
  {
  if (contador === -0) return 0;
    
  }
  return contador;
}

module.exports = productoEntreNúmeros;