// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(public nome: string) {
    }

    buzinar() {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade) //Velocidade padrão(0)
moto.acelerar(45)
console.log(moto.velocidade) //Velocidade após "acelerar"
 
// Exercício 2 - Herança
abstract class Poligono {
    constructor(public base: number = 0, public altura: number = 0) {
    }

    abstract area(): number //Só serve para ser chamada por "Retangulo"
}

class Retangulo extends Poligono {
    area(): number {
        return this.base * this.altura
    }
}
const retangulo = new Retangulo(10, 9)
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
// Usa-se em "getters" e "setters" o símbolo(_)
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome() {
        return this._primeiroNome
    }

    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } 
        else {
            this._primeiroNome = ''
        }
    }
}
const estagiario = new Estagiario 
estagiario.primeiroNome = 'Le' //Não vai retornar vazio, por ser < que 3
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo' //Vai retornar algo
console.log(estagiario.primeiroNome)