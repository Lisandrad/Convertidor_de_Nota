
function conversor () {
  let valorEntrada = prompt('Introducir Nota Numerica')
  const valor = parseFloat(valorEntrada);
  console.log(valor);

  var x = valor <=100;

  if  (valor <= 100  && valor >= 90  ) {
    alert ("La calificación en letras es una A")

  } else if ( valor <= 89 && valor >= 80) {
    alert("La calificación en letras es una B")

  } else if ( valor <= 79 && valor >= 70) { 
    alert("La calificación en letras es una C")

  } else if ( valor <= 69 && valor >= 60) { 

    alert("La calificación en letras es una D")

  } else if ( valor <= 59) { 
      alert("La calificación en letras es una F")
  } 

  conversor();
}

conversor();