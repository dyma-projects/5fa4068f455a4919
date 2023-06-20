import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component {
  status: boolean = true;

  btnClicked() {
    this.status = !this.status;
    console.log('current status', this.status);
  }
}
