class Persona {
  private readonly _dni: number;
  public nombre: string;
  private _edad: number;
  private _email: string;

  constructor(dni: number, nombre: string, edad: number, email: string) {
    this._dni = dni;
    this.nombre = nombre;
    if (edad < 0 || edad > 120) {
      throw new Error("No se permite edades menores a 0 y mayores a 120");
    } else this._edad = edad;
    if (!email.includes("@")) {
      throw new Error("El correo debe de contener un @ si no, no es valido");
    } else this._email = email;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("No se permite edades menores a 0 y mayores a 120");
    } else this._edad = valor;
  }
  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El correo debe de contener un @ si no, no es valido");
    } else this._email = valor;
  }
  get esMayorEdad(): boolean {
    if (this.edad >= 18) {
      return true;
    } else return false;
  }
  get datosPublicos(): string {
    return `Nombre:${this.nombre}, Es mayor de edad ${persona.esMayorEdad}`;
  }
}

const persona = new Persona(46320509, "lautaro", 18, "shortlautaro@35");

console.log(persona.edad);
console.log(persona.email);
console.log(persona.esMayorEdad);
console.log(persona.datosPublicos);
