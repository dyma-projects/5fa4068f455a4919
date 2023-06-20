import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  nbClick: number = 0;

  buttonClicked() {
    console.log('clicked');
    this.nbClick++;
  }
}
