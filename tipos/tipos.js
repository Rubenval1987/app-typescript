"use strict";
//STRING
let nome = 'João'; //Declarando o tipo de dado
console.log(nome);
//NUMBER
let idade = 60; //Declarando o tipo de dado
console.log(idade);
//BOOLEAN
let possuiHobbies = false; //Declarando o tipo de dado
console.log(possuiHobbies);
//TIPOS EXPLÍCITOS/IMPLÍCITOS
let minhaIdade; //Definindo o tipo de dado como variado(any)
//String
minhaIdade = 'Patrícia';
console.log(minhaIdade);
//Number
minhaIdade = 45;
console.log(minhaIdade);
//ARRAY
let hobbies; //Array aceita vários tipos de dados(any)
//Array string 
hobbies = ['cozinhar', 'pedalar', 'Correr'];
console.log(hobbies[1]);
//Array number
hobbies = [100, 200, 300];
console.log(hobbies);
//TUPLA
let endereco; //Definindo a ordem de dados na tupla
endereco = ['Av Principal', 1250, 'Planalto'];
console.log(endereco);
//ENUM
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Amarelo"] = 3] = "Amarelo";
    Cor[Cor["Vermelho"] = 4] = "Vermelho";
    Cor[Cor["Preto"] = 5] = "Preto";
})(Cor || (Cor = {}));
console.log(Cor); //Imprimindo todos os dados 
console.log(Cor.Amarelo, Cor.Vermelho, Cor.Preto); //Imprimindo só alguns dados
//ANY
let carro;
carro = { Marca: 'Mercedes', Ano: 2023 };
console.log(carro);
//FUNÇÕES
//String
function retornaMeuNome() {
    return nome; //Importando "nome" do arquivo "string"
}
console.log(retornaMeuNome());
//Void
function digaOi() {
    console.log('Oi');
}
digaOi(); //Forçando a função retornar algo
//Number
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 5));
//FUNÇÕES COM TIPO
let calculo; //Função com vários tipos
calculo = digaOi;
calculo();
calculo = multiplicar;
console.log(calculo(10, 25));
//OBJETOS E TIPOS
let usuario = {
    nome: 'Samantha Sales',
    idade: 67
};
console.log(usuario);
usuario =
    {
        idade: 31,
        nome: 'Patricia Souza'
    };
console.log(usuario);
let funcionario = {
    supervisores: ['Fabrícia', 'Fernando'], baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(11));
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'], baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(7));
console.log(funcionario2.baterPonto(6));
console.log(funcionario2.baterPonto(10));
//UNION TYPES
let nota; //Os dados podem ser number ou string
nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '200';
console.log(`Minha nota é ${nota}`);
//CHECANDO TIPOS
//Number
let valor1 = 25;
if (typeof valor1 === 'number') //Checando se é do tipo number
 {
    console.log('É um number');
}
else {
    console.log(typeof valor1);
}
//String
let valor2 = '2500';
if (typeof valor2 === 'number') //Checando se é do tipo number
 {
    console.log('É um number');
}
else {
    console.log(typeof valor2);
}
//NEVER
//Usado quando um script não é executada até o final 
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 6,
    validarProduto() {
        if (!this.nome || this.nome.length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
const contato1 = {
    nome: 'Tereza',
    tel1: '123456789',
    tel2: null //Pode ser string ou null
};
console.log((contato1.nome));
console.log((contato1.tel1));
console.log((contato1.tel2));
let podeSerNulo = null; //O tipo de dado de "null" é any 
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abcdef';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map