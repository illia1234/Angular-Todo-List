import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title = "todo-list"
  todos!: Todo[];
  inputTodo:string=""

  constructor(){}

  ngOnInit(): void {
    this.todos=[
      // {
      //   contend:'first content',
      //   completet:true
      // },
      // {
      //   contend:'second content',
      //   completet:true
      // },
    ]
  }

  toggDone (id:number) {
    this.todos.map((v,i) => {
      if (i==id) v.completet = !v.completet;

      return v;
    })
  }
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v ,i) => i !== id);
  } 

  addTodo () {
    this.todos.push({
      contend:this.inputTodo,
      completet: false
    })
    this.inputTodo="";
  }
}
