class Producto {
  nombre: string;
  precios: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precios: number,
    categoria: string,
    stock: number,
  ) {
    this.nombre = nombre;
    this.precios = precios;
    this.categoria = categoria;
    this.stock = stock;
  }
  describir(): string {
    return `descripcion del producto: 
    Nombre: ${this.nombre}
    Precio: $${this.precios}
    Categoria: ${this.categoria}
    Stock: ${this.stock}`;
  }
  hayStock(cantidad: number): boolean {
    if (cantidad > 0 && cantidad <= this.stock) {
      return true;
    } else return false;
  }
  venderUnidades(cantidad: number, validostock: boolean): string {
    if (validostock === true) {
      this.stock -= cantidad;
      return `ventas total : ${this.stock}`;
    } else return "no hay suficiente stock para vender";
  }
  aplicarDescuento(porcentaje: number): number {
    let descuento = porcentaje / 100;
    return this.precios * descuento;
  }
}

const producto = new Producto("Secadora", 170, "electrodomestico", 5);
const validostock = producto.hayStock(producto.stock);
console.log(producto.describir());
console.log(validostock);
console.log(producto.venderUnidades(5, validostock));
console.log(producto.aplicarDescuento(50));
