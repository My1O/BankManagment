/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuentas/Cuenta.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Cuentas/Empleados/Director.js';
import { Empleado } from './Cuentas/Empleados/Empleado.js';
import { Gerente } from './Cuentas/Empleados/Gerente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '11223366',10000);
const gerente =  new Gerente('Pedro Rivas','2366113',12000 );
const director = new Director('Elena MOreno', '1123351',15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
