import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name="Suraj";
  getNamee(){
    return "Hello";
  }
  arr=[1,2,3,4,5];
  getName(){
    this.name;
  }
  person={
    pName:"Tom",
    pId:5.5
  }
}
