// ---- Exercício 1: Função Construtora - Retângulo ----

function Retangulo(x, y) {
  this.base = x;
  this.altura = y;

  this.calcularArea = function() {
    return this.base * this.altura;
  };
}

function calcularArea() {
  var base = document.getElementById("base").value;
  var altura = document.getElementById("altura").value;

  var retangulo = new Retangulo(Number(base), Number(altura));
  var area = retangulo.calcularArea();

  document.getElementById("resultadoRetangulo").innerHTML =
    "Base: " + retangulo.base + " | Altura: " + retangulo.altura + " | Área: " + area;
}


// ---- Exercício 2: Classes com Herança ----

class Conta {
  constructor() {
    this._nome = "";
    this._banco = "";
    this._numero = "";
    this._saldo = 0;
  }

  get nome() { return this._nome; }
  set nome(v) { this._nome = v; }

  get banco() { return this._banco; }
  set banco(v) { this._banco = v; }

  get numero() { return this._numero; }
  set numero(v) { this._numero = v; }

  get saldo() { return this._saldo; }
  set saldo(v) { this._saldo = Number(v); }
}

class Corrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial = 0;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(v) { this._saldoEspecial = Number(v); }
}

class Poupanca extends Conta {
  constructor() {
    super();
    this._juros = 0;
    this._vencimento = "";
  }

  get juros() { return this._juros; }
  set juros(v) { this._juros = Number(v); }

  get vencimento() { return this._vencimento; }
  set vencimento(v) { this._vencimento = v; }
}

function criarCorrente() {
  var c = new Corrente();
  c.nome = document.getElementById("c-nome").value;
  c.banco = document.getElementById("c-banco").value;
  c.numero = document.getElementById("c-numero").value;
  c.saldo = document.getElementById("c-saldo").value;
  c.saldoEspecial = document.getElementById("c-especial").value;

  document.getElementById("resultadoCorrente").innerHTML =
    "Nome: " + c.nome + "<br>" +
    "Banco: " + c.banco + "<br>" +
    "Número: " + c.numero + "<br>" +
    "Saldo: R$ " + c.saldo + "<br>" +
    "Saldo Especial: R$ " + c.saldoEspecial;
}

function criarPoupanca() {
  var p = new Poupanca();
  p.nome = document.getElementById("p-nome").value;
  p.banco = document.getElementById("p-banco").value;
  p.numero = document.getElementById("p-numero").value;
  p.saldo = document.getElementById("p-saldo").value;
  p.juros = document.getElementById("p-juros").value;
  p.vencimento = document.getElementById("p-vencimento").value;

  document.getElementById("resultadoPoupanca").innerHTML =
    "Nome: " + p.nome + "<br>" +
    "Banco: " + p.banco + "<br>" +
    "Número: " + p.numero + "<br>" +
    "Saldo: R$ " + p.saldo + "<br>" +
    "Juros: " + p.juros + "%<br>" +
    "Vencimento: " + p.vencimento;
}
