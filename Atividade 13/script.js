var imgFechada  = document.getElementById("img-fechada");
var imgAberta   = document.getElementById("img-aberta");
var imgQuebrada = document.getElementById("img-quebrada");
var status      = document.getElementById("status");

var quebrada = false;

// Passa o mouse em cima: abre a janela
imgFechada.addEventListener("mouseover", function() {
  imgFechada.classList.remove("visivel");
  imgAberta.classList.add("visivel");
  status.textContent = "Janela Aberta";
});

// Tira o mouse: fecha a janela
imgAberta.addEventListener("mouseout", function() {
  if (quebrada) return;
  imgAberta.classList.remove("visivel");
  imgFechada.classList.add("visivel");
  status.textContent = "Janela Fechada";
});

// Clica: quebra a janela
imgAberta.addEventListener("click", function() {
  quebrada = true;
  imgAberta.classList.remove("visivel");
  imgQuebrada.classList.add("visivel");
  status.textContent = "Janela Quebrada";
});

// Também pode quebrar clicando na janela fechada
imgFechada.addEventListener("click", function() {
  quebrada = true;
  imgFechada.classList.remove("visivel");
  imgQuebrada.classList.add("visivel");
  status.textContent = "Janela Quebrada";
});
