//NAMESPACE
namespace Geometria { //Primeiro namespace
    export namespace Area { //Segundo namespace
        export const Pi = 3.14
    
        export function circunferencia(raio: number): number {
            return Pi * Math.pow(raio, 2) //Área da circunferência
        }
    }
}