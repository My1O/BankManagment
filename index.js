/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuentas/Cuenta.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeo = new CuentaAhorro (cliente, '9985','001',0);


console.log(cuentaDeLeonardo);
console.log("Se depositan 150");
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
console.log("Se retiran 70");
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeo);
console.log("Se depositan:" + cuentaAhorroLeo.depositoEnCuenta(200));
cuentaAhorroLeo.retirarDeCuenta(120);
//console.log(cuentaAhorroLeo.retirarDeCuenta(80));
console.log(cuentaAhorroLeo.verSaldo());


const cuentaNominaAna = new CuentaNomina(cliente, '0098', '002', 100);
cuentaNominaAna.depositoEnCuenta(150);
cuentaNominaAna.retirarDeCuenta(50);
console.log(cuentaNominaAna.verSaldo());

