//MÓDULOS
// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
import {areaRetangulo} from './retangulo'
import {areaCircunferencia} from './circunferencia'

console.log('Módulo carregado...')
console.log(areaRetangulo(7, 8))
console.log(areaCircunferencia(2))

const {digaOi} = require('./novo')
console.log(digaOi('Ana'))