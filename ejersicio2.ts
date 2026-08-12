class CuentaBancaria {
  protected titular: string;
  private saldo: number;
  private historiasMovimieto: string[];

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.historiasMovimieto = [];
    if (saldoInicial < 0) {
      console.log("Por favor ingrese un saldo inicial que no sea inferior a 0");
      this.saldo = 0;
    } else {
      this.saldo = saldoInicial;
    }
  }

  historiMovimientos(): string[] {
    return [...this.historiasMovimieto];
  }
  depositar(monto: number): string {
    if (monto <= 0) {
      return "Error: al ingresar su monto por favor ingresar un monto mas alto";
    } else this.saldo += monto;
    this.historiasMovimieto.push(
      `se ingreso esta cantida en el saldo ${monto}`,
    );
    return "se ingreso correctamente el monto";
  }
  consultarSaldo(): number {
    return this.saldo;
  }
}
const Usuario = new CuentaBancaria("lautaro", 10000);
console.log(Usuario.consultarSaldo());
console.log(Usuario.depositar(200));
console.log(Usuario.historiMovimientos());
console.log(Usuario.consultarSaldo());
