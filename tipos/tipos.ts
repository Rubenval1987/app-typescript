//STRING
let nome: string = 'João' //Declarando o tipo de dado
console.log(nome)



//NUMBER
let idade: number = 60 //Declarando o tipo de dado
console.log(idade)



//BOOLEAN
let possuiHobbies: boolean = false //Declarando o tipo de dado
console.log(possuiHobbies)



//TIPOS EXPLÍCITOS/IMPLÍCITOS
let minhaIdade: any //Definindo o tipo de dado como variado(any)
//String
minhaIdade = 'Patrícia' 
console.log(minhaIdade)

//Number
minhaIdade = 45 
console.log(minhaIdade) 



//ARRAY
let hobbies: any[] //Array aceita vários tipos de dados(any)
//Array string 
hobbies = ['cozinhar', 'pedalar', 'Correr'] 
console.log(hobbies[1]) 

//Array number
hobbies = [100, 200, 300] 
console.log(hobbies)



//TUPLA
let endereco: [string, number, string] //Definindo a ordem de dados na tupla
endereco = ['Av Principal', 1250, 'Planalto']
console.log(endereco)



//ENUM
enum Cor
{
    Cinza,
    Azul,
    Verde,
    Amarelo,
    Vermelho,
    Preto
}
console.log(Cor) //Imprimindo todos os dados 
console.log(Cor.Amarelo, Cor.Vermelho, Cor.Preto) //Imprimindo só alguns dados



//ANY
let carro: any
carro = {Marca: 'Mercedes', Ano: 2023}
console.log(carro)



//FUNÇÕES
//String
function retornaMeuNome(): string
{
    return nome //Importando "nome" do arquivo "string"
}
console.log(retornaMeuNome())

//Void
function digaOi(): void //Void não retorna nada
{
    console.log('Oi')
}
digaOi() //Forçando a função retornar algo

//Number
function multiplicar(numA: number, numB: number): number
{
    return numA * numB
}
console.log(multiplicar(2, 5))



//FUNÇÕES COM TIPO
let calculo //Função com vários tipos
calculo = digaOi
calculo()

calculo = multiplicar
console.log(calculo(10, 25))



//OBJETOS E TIPOS
let usuario: {nome: string, idade: number} = 
{
    nome: 'Samantha Sales',
    idade: 67
}
console.log(usuario)

usuario = 
{
    idade: 31,
    nome: 'Patricia Souza'
}
console.log(usuario)



//DESAFIO-1
/*
    Criar um objeto funcionário com:
        -Array de strings com os nomes dos surpevisores
        -Função de bater ponto que recebe a hora e retorna string
            ->Ponto normal (<= 8)
            ->Fora do horário (> 8)
*/
//ALIAS
//Apelido dado a objetos para ser reutilizado em vários lugares 
type Funcionario = {
    supervisores: string[], baterPonto: (horas: number) => string    
}

let funcionario: Funcionario = {
    supervisores: ['Fabrícia', 'Fernando'], baterPonto(horario: number): string 
    {
        if(horario <= 8) 
        {
            return 'Ponto normal'
        } 
        else 
        {
            return 'Fora do horário!'
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
console.log(funcionario.baterPonto(11))

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'], baterPonto(horario: number): string 
    {
        if(horario <= 8) 
        {
            return 'Ponto normal'
        } 
        else 
        {
            return 'Fora do horário!'
        }
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(7))
console.log(funcionario2.baterPonto(6))
console.log(funcionario2.baterPonto(10))



//UNION TYPES
let nota: number | string //Os dados podem ser number ou string
nota = 10
console.log(`Minha nota é ${nota}`)

nota = '200'
console.log(`Minha nota é ${nota}`)



//CHECANDO TIPOS
//Number
let valor1 = 25 
if(typeof valor1 === 'number') //Checando se é do tipo number
{
console.log('É um number')
}
else
{
    console.log(typeof valor1)
}

//String
let valor2 = '2500'
if(typeof valor2 === 'number') //Checando se é do tipo number
{
console.log('É um number')
}
else
{
    console.log(typeof valor2)
}



//NEVER
//Usado quando um script não é executada até o final 
function falha(msg: string): never
{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 6,
    validarProduto()
    {
        if(!this.nome || this.nome.length == 0)
        {
            falha('Precisa ter um nome!')
        }
        if(this.preco <= 0)
        {
            falha('Preço inválido!')
        }
    }
}
produto.validarProduto()



//NULL
//Definindo os tipos de dados de "Contato"
type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null //Pode ser string ou null
}

const contato1: Contato = {
    nome: 'Tereza',
    tel1: '123456789',
    tel2: null //Pode ser string ou null
}
console.log((contato1.nome))
console.log((contato1.tel1))
console.log((contato1.tel2))

let podeSerNulo = null //O tipo de dado de "null" é any 
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abcdef'
console.log(podeSerNulo)



//DESAFIO-2
/*
Atribuir os tipos corretos aos dados abaixo
*/
type ContaBancaria = {
    saldo: number, 
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456, 
    depositar(valor: number) 
    {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)


