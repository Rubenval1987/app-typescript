//DECORATORS
//Adiciona funcionalidades extras a uma declaração 
//de classe, método, acessador, propriedade ou parâmetro
function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number}) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}

type Construtor = {new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

interface Eletrodomestico {
    imprimir?(): void
}

@logarClasse
@decorator({a: 'Teste', b: 123})
@logarClasseSe(true)
@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()
eletro.imprimir && eletro.imprimir()
eletro.imprimir && eletro.imprimir()




//DESAFIO
//Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}

class ContaCorrente {
    @naoNegativo //Deixando claro que o valor nunca pode ser negativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        } 
        else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}
const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
cc.sacar(5248.57)
cc.sacar(0.1)
console.log(cc.getSaldo())
console.log(cc.getSaldo())

//Object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false //O descritor não pode ser subscrito
}

//Decorator de atributo
function naoNegativo(alvo: any, nomePropriedade: string) { //Função que só aceita valor positivo
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error('Saldo Inválido')
            } 
            else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}

//Decorator de parâmetro
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Índice Param: ${indiceParam}`)
}