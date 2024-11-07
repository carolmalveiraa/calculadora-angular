import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display: string = '';
  valor1: number | null = null;
  valor2: number | null = null;
  operador: string | null = null;

  adicionarNumero(numero: string) {
    console.log("Número adicionado:", numero);
    this.display += numero;
  }
  

  escolherOperador(operador: string) {
      if (this.display !== '') {
      this.valor1 = parseFloat(this.display);
      this.operador = operador;
      this.display = '';
    }
  }

  calcular() {
    if (this.valor1 !== null && this.operador !== null) {
      this.valor2 = parseFloat(this.display);
      let resultado = 0;

      switch (this.operador) {
        case '+':
          resultado = this.valor1 + this.valor2;
          break;
        case '-':
          resultado = this.valor1 - this.valor2;
          break;
        case '*':
          resultado = this.valor1 * this.valor2;
          break;
        case '/':
          if (this.valor2!== 0) {
            resultado = this.valor1 / this.valor2;
          } else {
            alert('Não é possível dividir por zero.');
            return;
          }
          break;
        default:
          alert('Operador inválido.');
          return;
      }

      this.display = resultado.toString();
      this.valor1 = null;
      this.valor2 = null;
      this.operador = null;
    }
  }

  limpar() {
    this.display = '';
    this.valor1 = null;
    this.valor2 = null;
    this.operador = null;
  }

  limparEntrada() {
    this.display = '';
  }

  inverterSinal() {
    if (this.display !== '') {
      this.display = (parseFloat(this.display) * -1).toString();
    }
  }

  calcularPercentual() {
    if (this.display !== '') {
      this.display = (parseFloat(this.display) / 100).toString();
    }
  }
}
