import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'calendario-angular',
  templateUrl: './calendario-angular.component.html',
  styleUrls: ['./styles/calendario-angular.component.scss']
})
export class CalendarioAngularComponent implements OnInit {

  @Input() title: string = 'Título do Input';
  showTitle: boolean = false;
  calendar!: FormGroup;

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCalendario();
  }

  private formCalendario(): void {
    this.calendar = this.form.group({
      date: []
    })
  }

  handleFocusInput(): void {
    !this.showTitle && (this.showTitle = true);
  }

  handleFocusoutInput(): void {
    (!this.calendar.get('date')?.value && this.showTitle) && (this.showTitle = false);
  }

}
