import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>;
  constructor(private todoService:TodoService, private router: Router){}

  ngOnInit():void {
   this.todos= this.todoService.getAllTodos();  
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe(
        data => {
          this.todos = this.todoService.getAllTodos();
          alert("Todo deleted !")
        },
        error => {console.log(error);alert("Todo can't be deleted !")});
  }

  closeTodo(todo: Todo) {
     todo.status="CLOSED";
      this.todoService.updateTodo(todo)
      .subscribe(data => this.todos = this.todoService.getAllTodos(),
        error => alert("Error !")); 
  }

  updateTodo(id: number){
    this.router.navigate(['addTodo', id]);
  }

}
