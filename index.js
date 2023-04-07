/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';




//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '11223366',10000);
const gerente =  new Gerente('Pedro Rivas','2366113',12000 );
//const director = new Director('Elena MOreno', '1123351',15000);


gerente.asignarClave('6556');

empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(gerente, '6556'));
console.log(SistemaAutenticacion.login(empleado, '12345'));

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'));