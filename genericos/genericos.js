"use strict";
//GENERICS
//Fornecem uma forma de informar a funções, classes 
//ou interfaces que tipo você deseja usar
//Sem usar generics
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length); //Retorna indefinido, pois não pode ser mumérico
console.log(echo({ nome: 'João', idade: 27 }));
//Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Patrícia').length);
console.log(echoMelhorado(40)); //Generics definiu que só pode retornar(<number>)
console.log(echoMelhorado({ nome: 'Patrícia', idade: 40 }).nome);
//Generics com array-1
const avaliacoes = [10, 9.3, 7.7]; //Generics(<number>)
avaliacoes.push(8.4); //"push" acrescenta item no array "avaliaoes"
console.log(avaliacoes);
//Generics com array-2
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]); //Primeira maneira
imprimir([1, 2, 3]); //Segunda maneira
imprimir(['Ana', 'Bia', 'Carlos']); //Terceira maneira
imprimir([
    { nome: 'Fulano', idade: 10 },
    { nome: 'Ciclano', idade: 20 },
    { nome: 'Beltrano', idade: 30 }
]);
imprimir([
    { nome: 'Fulano', idade: 10 },
    { nome: 'Cicrano', idade: 20 },
    { nome: 'Beltrano', idade: 30 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
//Class com Generics-1
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(60, 130).executar());
// //Classes com generics-2
// class DiferencaEntreDatas
//     extends OperacaoBinaria<Data, string> {
//     getTime(data: Data): number {
//         let {dia, mes, ano} = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }
//     executar(): string {
//         const t1 = this.getTime(this.operando1)
//         const t2 = this.getTime(this.operando2)
//         const diferenca = Math.abs(t1 - t2)
//         const dia = 1000 * 60 * 60 * 24 //Cálcilo de milesegundos
//         return `${Math.ceil(diferenca / dia)} dia(s)`
//     }
// }
// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 3, 2022)
// console.log(new DiferencaEntreDatas(d1, d2).executar())
//Desafio classe "fila"
//Atributo: fila(Array)
//Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Guilherme', 'Pedro', 'Ana', 'Luana');
fila.imprimir();
fila.entrar('Rafael'); //Acrescentando "Rafael"
fila.imprimir();
console.log(fila.proximo()); //Removendo "Guilherme"
console.log(fila.proximo()); //Removendo "Pedro"
console.log(fila.proximo()); //Removendo "Ana"
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens
            .filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
console.log(mapa.obter(2)); //Item com índice "2"
mapa.imprimir();
mapa.limpar(); //Limpando o vetor
mapa.imprimir(); //Vetor vazio
//# sourceMappingURL=genericos.js.map