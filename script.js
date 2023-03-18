function fibonacci(event) {
  var anterior = 0;
  var atual = 1;
  var proximo = 1;

  for (let i = 0; i < event; i++) {
    console.log(proximo);
    anterior = atual + proximo;
    atual = proximo;
    proximo = anterior;
  }
}

fibonacci(numeroUsuario);

// numero input
let numeroDigitado = document.querySelector("#numeroUsuario");

function handlechange(e) {
  let numeroUsuario = e.target.value; // valor que o usuario digitou
  console.log(numeroUsuario);

  if ((numeroUsuario = fibonacci)) {
    alert("Número pertence a seguência de Fibonicci");
  } else if (!= fibonacci) {
    alert("Número não pertence a seguência de Fibonicci");
  }
}
numeroDigitado.addEventListener("change", handlechange);
