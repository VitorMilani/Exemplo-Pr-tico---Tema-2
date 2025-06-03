function calcular() {
  const valor = parseFloat(document.getElementById("valor").value) || 0;
  const percentual = parseFloat(document.getElementById("percentual").value) || 0;
  const fixo = parseFloat(document.getElementById("fixo").value) || 0;

  let precoFinal = valor - (valor * percentual / 100) - fixo;
  precoFinal = Math.max(precoFinal, 0);

  document.getElementById("resultado").innerText =
    `Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
}
