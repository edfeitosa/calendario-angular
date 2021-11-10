import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cal-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('quantidade de dias -> ', this.quantidaDiasDoMes(2021, 4));
    console.log('o primeiro dia do mês é -> ', this.primeiroDiaDoMes(2021, 4));
  }

  private formataData(ano: number, mes: number): Date {
    return new Date(ano, mes, 0);
  }

  private quantidaDiasDoMes(ano: number, mes: number): number {
    return this.formataData(ano, mes).getDate();
  }

  private inicioDoMes(ano: number, mes: number): number {
    let data = this.formataData(ano, mes);
    let primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1);
    return primeiroDia.getDay();
  }

  private primeiroDiaDoMes(ano: number, mes: number): string {
    let ordemDia: number = this.inicioDoMes(ano, mes);
    let diaSemana: string;
    switch(ordemDia) {
      case 0: diaSemana = 'domingo'; break;
      case 1: diaSemana = 'segunda-feira'; break;
      case 2: diaSemana = 'terça-feira'; break;
      case 3: diaSemana = 'quarta-feira'; break;
      case 4: diaSemana = 'quinta-feira'; break;
      case 5: diaSemana = 'sexta-feira'; break;
      case 6: diaSemana = 'sábado'; break;
      default: diaSemana = 'domingo'; break;
    }
    return diaSemana;
  }

}
