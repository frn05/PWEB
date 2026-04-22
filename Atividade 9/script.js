function maiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(texto) {
  let tratado = texto.toLowerCase().replace(/\s/g, "");
  let invertido = tratado.split("").reverse().join("");
  return tratado === invertido;
}

function verificarSub(p1, p2) {
  if (!p1 || !p2) return "erro";

  let str1 = p1.toLowerCase();
  let str2 = p2.toLowerCase();

  return str1.includes(str2)
    ? "é um subconjunto"
    : "não é um subconjunto";
}

function diaSemana(data) {
  let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let d = new Date(data);
  return dias[d.getDay()];
}



function executarNumeros() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);

  let maior = maiorNumero(n1, n2, n3);
  let ordem = ordemCrescente(n1, n2, n3);

  document.getElementById("resultado").innerHTML =
    `Maior: ${maior} <br> Ordem crescente: ${ordem.join(", ")}`;
}

function verificarPalindromo() {
  let texto = document.getElementById("texto").value;

  let resultado = ehPalindromo(texto)
    ? "É palíndromo"
    : "Não é palíndromo";

  document.getElementById("resultado").innerHTML = resultado;
}

function verificarSubconjunto() {
  let p1 = document.getElementById("palavra1").value;
  let p2 = document.getElementById("palavra2").value;

  let resultado = verificarSub(p1, p2);

  document.getElementById("resultado").innerHTML = resultado;
}

function mostrarDia() {
  let data = document.getElementById("data").value;

  if (!data) {
    alert("Selecione uma data!");
    return;
  }

  let resultado = diaSemana(data);

  document.getElementById("resultado").innerHTML =
    `Dia da semana: ${resultado}`;
}