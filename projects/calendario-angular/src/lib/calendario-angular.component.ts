import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'calendario-angular',
  templateUrl: './calendario-angular.component.html',
  styleUrls: ['./styles/calendario-angular.component.scss']
})
export class CalendarioAngularComponent implements OnInit {

  @Input() title: string = 'Título do Input';
  mostrarTitulo: boolean = false;
  estaFocado: boolean = false;
  mostrarCalendario: boolean = false;
  calendario!: FormGroup;

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCalendario();
  }

  private formCalendario(): void {
    this.calendario = this.form.group({
      date: []
    })
  }

  handleFocusInput(): void {
    this.alterarExibicaoTitulo();
    this.alteraFocoInput();
    this.alterarExibicaoCalendario();
  }

  handleFocusoutInput(): void {
    (!this.calendario.get('date')?.value) && (
      this.alterarExibicaoTitulo(false),
      this.alteraFocoInput(false),
      this.alterarExibicaoCalendario(false)
    )
  }

  private alterarExibicaoTitulo(valor: boolean = true): void {
    this.mostrarTitulo = valor
  }

  private alteraFocoInput(valor: boolean = true): void {
    this.estaFocado = valor;
  }

  private alterarExibicaoCalendario(valor: boolean = true): void {
    this.mostrarCalendario = valor;
  }

}
