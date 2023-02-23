//COMPILAÇÃO
let canal: string = 'Gaveta'
let inscritos: number = 123456

//canal = inscritos //Retornará um erro

console.log(`Canal = ${canal}`)
console.log(`Inscritos = ${inscritos}`)



//EVITANDO ANY IMPLÍCITO
//Necessário colocar any nas variáveis
function soma(a:any, b:any)
{
    return a + b
}
console.log(soma(20, 10))



//"STRICTNULLCHECKS", "NOUNUSEDPARAMETERS" E "NOUNUSEDLOCALS"
function saudar(isManha: boolean): string 
{
    let saudacao: string
    if(isManha) 
    {
        saudacao = 'Bom dia!'
    }
    else
    {
        saudacao = 'Tenha uma boa tarde!'
    }
    return saudacao
}
console.log(saudar)
