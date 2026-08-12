class Empleado {
  protected nombre: string;
  protected antiguedad: number;
  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }
  calcularSueldo(sueldoBase: number): number {
    return 0;
  }
  describir(): string {
    return `nombre: ${this.nombre},y lleva ${this.antiguedad} 
    años trabajando`;
  }
}
class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }
  calcularSueldo(sueldoBase: number): number {
    let bono = this.antiguedad * 0.02;
    let sueldototal = sueldoBase + sueldoBase * bono;
    return (this.sueldoBase = sueldototal);
  }
}
const empleado = new EmpleadoFijo("leandro", 5, 1000);
console.log();
console.log(empleado.describir());
console.log(empleado.calcularSueldo(1000));
