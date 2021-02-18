import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo/todo.service';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  t: Todo = new Todo();
  dateError:boolean=false;
  formTitle:string="CREATE TODO";
  id: number;
  constructor(private route: ActivatedRoute,private todoService: TodoService, private router: Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    if(this.id){    
        this.formTitle="UPDATE TODO";
      this.todoService.getTodoById(this.id)
        .subscribe(data =>this.t= data);
    }
  }

  save() {
    this.t.status="OPENED";
    this.todoService.addTodo(this.t)
      .subscribe(data => 
        this.list(),
         error => this.dateError= true); 
  }
  list(){
    this.router.navigate(['allTodos']);
  }
}
