abstract class Empleado {
  protected nombre: string;
  protected antiguedad: number;
  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }
  abstract calcularSueldo(): number;
  describir(): string {
    const sueldo = this.calcularSueldo();
    return `Nombre:${this.nombre}
    años trabajando:${this.antiguedad} años 
    sueldo:$${sueldo}`;
  }
}
class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }
  calcularSueldo(): number {
    let bono = this.antiguedad * 0.02;
    let sueldototal = this.sueldoBase + this.sueldoBase * bono;
    return (this.sueldoBase = sueldototal);
  }
}

class EmpleadoPorHoras extends Empleado {
  horasTrabajas: number;
  valorHora: number;
  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajas: number,
    valorHoras: number,
  ) {
    super(nombre, antiguedad);
    this.horasTrabajas = horasTrabajas;
    this.valorHora = valorHoras;
  }
  calcularSueldo(): number {
    const totalValorHoras = this.horasTrabajas * this.valorHora;
    return totalValorHoras;
  }
}

class EmpleadoPorComisión extends Empleado {
  ventasDelMes: number;
  porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelmes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelmes;
    this.porcentajeComision = porcentajeComision;
  }
  calcularSueldo(): number {
    const totalDeVentas = this.ventasDelMes * (this.porcentajeComision / 100);
    return totalDeVentas;
  }
}

const empleadoHoras = new EmpleadoPorHoras("lautaro", 0, 40, 100);
const empleadoComision = new EmpleadoPorComisión("Fern", 2, 500, 50);
const empleadoFijo = new EmpleadoFijo("leandro", 5, 1000);
const Empleados: Empleado[] = [empleadoComision, empleadoHoras, empleadoFijo];

console.log(empleadoHoras.describir());
console.log(empleadoComision.describir());
console.log(empleadoHoras.calcularSueldo());
console.log(empleadoComision.calcularSueldo());

console.log("arreglo de empleados:");
let sueldoTotal = 0;
for (let Empleado of Empleados) {
  sueldoTotal = Empleado.calcularSueldo() + sueldoTotal;
  console.log(Empleado.calcularSueldo());
}

function calcularNominal(lista: Empleado[]): number {
  let sueldoTotal = 0;
  lista.forEach((Empleados) => {
    sueldoTotal = Empleados.calcularSueldo() + sueldoTotal;
  });
  return sueldoTotal;
}
console.log("Total a pagar $", calcularNominal(Empleados));
