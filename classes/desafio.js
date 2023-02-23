"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade); //Velocidade padrão(0)
moto.acelerar(45);
console.log(moto.velocidade); //Velocidade após "acelerar"
// Exercício 2 - Herança
class Poligono {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Poligono {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(10, 9);
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
// Usa-se em "getters" e "setters" o símbolo(_)
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
estagiario.primeiroNome = 'Le'; //Não vai retornar vazio, por ser < que 3
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo'; //Vai retornar algo
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map