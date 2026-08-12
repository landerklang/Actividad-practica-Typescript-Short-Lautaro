class Empleado {
  protected nombre: string;
  protected antiguedad: number;
  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }
  calcularSueldo(): number {
    return 0;
  }
  describir(): string {
    const sueldo = this.calcularSueldo();
    return `nombre: ${this.nombre}
  años: ${this.antiguedad} 
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
    return this.sueldoBase + sueldototal * bono;
  }
}
const empleado = new EmpleadoFijo("leandro", 5, 1000);
console.log(empleado.describir());
console.log(empleado.calcularSueldo());
