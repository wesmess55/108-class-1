// terminal install npm install -g @angular/cli
//http://localhost:4200/
// add FormsModule to line 15 on app module
// module line 7 add import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoText= "";
  todoList= [];

  addTodo(){
    console.log("add todo", this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }

}
