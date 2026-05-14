const inputTexto = document.getElementById('inputTexto');
const textoResultado = document.getElementById('textoResultado');
const resultado = document.getElementById('resultado');
const radios = document.querySelectorAll('input[name="caso"]');

function transformar() {
  const texto = inputTexto.value;
  const selecionado = document.querySelector('input[name="caso"]:checked');

  if (!texto || !selecionado) {
    textoResultado.textContent = '—';
    textoResultado.classList.add('vazio');
    resultado.classList.remove('ativo');
    return;
  }

  resultado.classList.add('ativo');
  textoResultado.classList.remove('vazio');

  if (selecionado.value === 'maiusculo') {
    textoResultado.textContent = texto.toUpperCase();
  } else {
    textoResultado.textContent = texto.toLowerCase();
  }
}

// Dispara ao digitar
inputTexto.addEventListener('input', transformar);

// Dispara ao mudar o radio
radios.forEach(radio => radio.addEventListener('change', transformar));
