import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-component1',
  templateUrl: './ex-component1.component.html',
  styleUrls: ['./ex-component1.component.css']
})
export class ExComponent1Component implements OnInit {

  title = 'Promo La Poste 2';
  description = 'Bonjour, il fait beau !';

  user = {
    name: 'Patrick',
    age: '42',
    birthday: new Date('1976/01/02')
  };

  users = [{
    name: 'Patrick',
    image: 'https://www.tuxboard.com/photos/2011/08/Emma-Watson-photo-visage-1000x1484.jpg',
    age: '42',
    birthday: new Date('1976/01/02')
  },
  {
    name: 'Paul',
    image: '',
    age: '30',
    birthday: new Date('1983/01/02')
  },
  {
    name: 'Joe',
    image: '',
    age: '26',
    birthday: new Date('1990/01/02')
  }];
  colorClass = '';
  colors = ['black', 'red', 'green', 'blue'];
  testRecuperationInput = '';

  selectedPerson = {name: '', image: '', age: '', birthday: ''};

  ngOnInit() {
  }

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

  testInput($event) {
    console.log($event.target.value);
    this.testRecuperationInput = $event.target.value;
  }

  testCheckbox($event) {
    console.log($event.target.value);
    console.log($event.target.checked);
  }

  afficherDetails(person) {
    console.log(person.name);
    this.selectedPerson.name = person.name;
    this.selectedPerson.image = person.image;
    this.selectedPerson.age = person.age;
    this.selectedPerson.birthday = person.birthday;
  }
}
