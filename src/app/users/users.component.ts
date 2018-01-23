import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedPerson = {name: '', image: '', age: '', birthday: ''};

  users = [{
    name: 'Patrick',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    age: '42',
    birthday: new Date('1976/01/02')
  },
  {
    name: 'Paul',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
    age: '30',
    birthday: new Date('1983/01/02')
  },
  {
    name: 'Joe',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
    age: '26',
    birthday: new Date('1990/01/02')
  }];

  constructor() { }

  ngOnInit() {
  }

  afficherDetails(person) {
    console.log(person.name);
    this.selectedPerson.name = person.name;
    this.selectedPerson.image = person.image;
    this.selectedPerson.age = person.age;
    this.selectedPerson.birthday = person.birthday;
  }

}
