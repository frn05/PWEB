let pessoas = [];

function adicionar() {
  let idade = Number(document.getElementById("idade").value);
  let sexo = document.getElementById("sexo").value;
  let opiniao = Number(document.getElementById("opiniao").value);

  if (!idade || !sexo || !opiniao) {
    alert("Preencha todos os campos!");
    return;
  }

  pessoas.push({ idade, sexo, opiniao });

  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("opiniao").value = "";
}

function calcular() {
  if (pessoas.length === 0) {
    alert("Adicione dados primeiro!");
    return;
  }

  let somaIdade = 0;
  let maior = pessoas[0].idade;
  let menor = pessoas[0].idade;

  let pessimo = 0;
  let otimoBom = 0;

  let mulheres = 0;
  let homens = 0;
  let outros = 0;

  pessoas.forEach(p => {
    somaIdade += p.idade;

    if (p.idade > maior) maior = p.idade;
    if (p.idade < menor) menor = p.idade;

    if (p.opiniao === 1) pessimo++;
    if (p.opiniao === 3 || p.opiniao === 4) otimoBom++;

    if (p.sexo === "f") mulheres++;
    else if (p.sexo === "m") homens++;
    else outros++;
  });

  let media = somaIdade / pessoas.length;
  let porcentagem = (otimoBom / pessoas.length) * 100;

  document.getElementById("resultado").innerHTML = `
    <p><strong>Média de idade:</strong> ${media.toFixed(2)}</p>
    <p><strong>Maior idade:</strong> ${maior}</p>
    <p><strong>Menor idade:</strong> ${menor}</p>
    <p><strong>Quantidade que respondeu péssimo:</strong> ${pessimo}</p>
    <p><strong>Porcentagem de ótimo e bom:</strong> ${porcentagem.toFixed(2)}%</p>
    <p><strong>Mulheres:</strong> ${mulheres}</p>
    <p><strong>Homens:</strong> ${homens}</p>
    <p><strong>Outros:</strong> ${outros}</p>
  `;
}