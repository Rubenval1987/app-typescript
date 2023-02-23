//LET E CONST
//Let
let seraQuePode = '?'
console.log(seraQuePode)

//Let
let estaFrio = true
if(estaFrio) 
{
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

//Const
const cpf: string = '123.456.789-00'
console.log(cpf)

//Const
function revelar() 
{
    const segredo = 'Interno'
    console.log(segredo)
}
revelar()

//Const
{
    {
        let def = 'def'
        console.log(def)
    }
}
//console.log(def) //Retornará um erro pq let tem escopo de bloco

//Let
for(let i = 0; i < 10; i++) 
{
    console.log(i) //Imprimirá de "1 a 9"
}
//console.log(i) //Retornará um erro pq let tem escopo de bloco




//ARROW FUNCTION
//Arrow torna a sintaxe mais reduzida
//O método "this" nunca varia com "arrow"
function somar(n1: number, n2: number): number 
{
    return n1 + n2
}
console.log(somar(2, 20))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(50, 80))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

//This
/*
const normalComThisEspecial = normalComThis
    .bind({ nome: 'Ana' })
normalComThisEspecial()

//This
//O this da linha 70 é o mesmo da linha 71
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis
    .bind({ nome: 'Ana' })
arrowComThisEspecial()
*/




//PARÂMETRO PADRÃO
function contagemRegressiva(inicio: number = 5, 
    fim: number = inicio - 5): void 
    {
        console.log(inicio)
        while(inicio > fim)
        {
            inicio --
            console.log(inicio)
        }
        console.log('Fim')
    }
contagemRegressiva()




//REST E SPREAD
//Tornam o código mais simples
//Operedor spread(...) Permite indefinidos parâmetros para uma função, Array ou objeto
//Operador rest(...) Permite uma função receber indefinidos parâmetros
const numbers = [1, 2, 5, 10, 100, 225]
console.log(Math.max(...numbers)) //Imprimindo o maior número

const turmaA: string[] = ['Pedro', 'Thiago', 'João']
const turmaB: string[] = ['Fernando', 'Patrícia', 'Fontinelle', ...turmaA]
console.log(turmaB) //Os dados da turmaA serão colocados na turmaB

function retornarArray(...args: number[]): number[]
{
    return args
}
const numeros = retornarArray(1, 2, 3, 4, 5) 
console.log(numeros)

//Operedor rest/spread em tuplas
const tupla1: [number, string, boolean] = [1, 'abcde', false]
function tuplaParametro1(a: number, b: string, c: boolean): void 
{
    console.log(`1) ${a} - ${b} - ${c}`)
}
tuplaParametro1(...tupla1)

//Operedor rest/spread em tuplas
const tupla2: [number, string, boolean] = [30, 'cdefg', true]
function tuplaParametro2(...param: [number, string, boolean])
{
    console.log(`2) ${param[0]} / ${param[1]} / ${param[2]}`)
}
tuplaParametro2(...tupla2)




//DESTRUCTURING
//Deixa a sintaxe do código mais simples
//Com array
const caracteristicas = ['Motor 1.4', 2019]
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

//Com objetos
const item = {
    nome: 'SSD 512GB',
    preco: 450,
    caracteristicas:
    {
        w: 'Importado'
    }
}
const {nome: n, preco: p, caracteristicas:{w}} = item
console.log(n)
console.log(p)
console.log(w)




//TEMPALTE STRING
const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '23'

const boasVindas = `
Boas vindas ${usuarioID}, 
notificacoes: ${parseInt(notificacoes) > 10 ? '+10': notificacoes}
`
console.log(boasVindas)
console.log(`${(1+1) * 30}`)




//DESAFIOS
//Exercicio 1
//Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript
const dobro = (valor: number): number => valor * 2 //Trocando o "var" por "const"
console.log(dobro(10))

//Exercicio 2
//Verifique se há espaço para melhorias nesse trecho de código
const dizerOla = function(nome: string = 'Pessoa'): void 
{
    console.log('Olá ' + nome)
}
dizerOla()
dizerOla('Anna')

//Exercicio 3
//Dado esse array, imprima o menor e maior valor
const nums = [-3, 1, 8, 5, 0]
console.log(Math.min(...nums)) //Imprimir o menor valor
console.log(Math.max(...nums)) //Imprimir o maior valor

//Exercicio 4
//Adicione os elementos de "nums" em "array" 
const array = [55, 20, 90]
array.push(...nums)
console.log(array)

//Exercicio 5
//Simplifique o código abaixo utilizando o operador destructuring
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(`Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}`)

//Exercicio 6
//Simplifique o código abaixo utilizando o operador destructuring
const cientista = {primeiroNome: 'Will', expeciencia: '15 anos'}
const {primeiroNome, expeciencia} = cientista
console.log(`Primeiro Nome: ${primeiroNome}, Experiência: ${expeciencia}`)




//PROMISE
//Callback
function esperar3s(callback: (dados: string) => void) {
    setTimeout(() => {
        callback('3s depois...')
    }, 3000)
}

esperar3s(function(resultado: string) {
    console.log(resultado)
})

//Promise
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois promise...')
        }, 3000)
    })
}

//Promise juntamente com a API "SWAPI"
esperar3sPromise()
    .then(dado => console.log(dado))

fetch('https://swapi.dev/api/paulo/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err))