import { Component, style } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Promo La Poste 2';
  description = 'Bonjour, il fait beau !';
  user = {
    name: 'Patrick',
    age: '42',
    birthday: new Date('1976/01/02')
  };
  colorClass = '';

  getDescription(): string {
    return this.description.toUpperCase();
  }

  changeTitle($event) {
    if (this.title === 'Promo La Poste 2') {
      this.title = 'Promo La Poste 3';
    } else {
      this.title = 'Promo La Poste 2';
    }
  }

  changeColor($event) {
    if (this.colorClass === 'red') {
      this.colorClass = 'blue';
    } else {
      this.colorClass = 'red';
    }
  }

  colorChoice($event) {
    this.colorClass = $event.target.value;
  }
}

