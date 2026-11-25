class Funcionario {
  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e atuo como ${this.cargo}.`;
  }

  calcularBonus() {
    return this.#salario * 0.1; // 10% de bônus padrão
  }

  verSalario() {
    return this.#salario;
  }

  aumentarSalario(valor) {
    if (valor <= 0) {
      console.log("O valor do aumento deve ser positivo.");
      return;
    }
    this.#salario += valor;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, cargo, salario, linguagem) {
    super(nome, cargo, salario);
    this.linguagem = linguagem;
  }

  // Sobrescrita de método: bônus maior (20%) para desenvolvedores
  calcularBonus() {
    return this.verSalario() * 0.2;
  }

  apresentar() {
    return `${super.apresentar()} Trabalho principalmente com ${this.linguagem}.`;
  }
}

class Designer extends Funcionario {
  constructor(nome, cargo, salario, ferramenta) {
    super(nome, cargo, salario);
    this.ferramenta = ferramenta;
  }

  // Sobrescrita de método: bônus diferenciado (15%) para designers
  calcularBonus() {
    return this.verSalario() * 0.15;
  }

  apresentar() {
    return `${super.apresentar()} Minha principal ferramenta é o ${this.ferramenta}.`;
  }
}

// Instanciando os objetos com 'new'
const dev = new Desenvolvedor("Ana Silva", "Desenvolvedora Backend", 6000, "JavaScript");
const designer = new Designer("Lucas Souza", "Designer de Produto", 5000, "Figma");

// Exibindo informações no console
function exibirResumo(funcionario) {
  console.log(funcionario.apresentar());
  console.log(`Salário atual: R$ ${funcionario.verSalario().toFixed(2)}`);
  console.log(`Bônus calculado: R$ ${funcionario.calcularBonus().toFixed(2)}`);
  console.log("----------------------------------------");
}

exibirResumo(dev);
exibirResumo(designer);