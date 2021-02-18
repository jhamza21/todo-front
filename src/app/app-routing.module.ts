import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'allTodos', pathMatch: 'full' },
    { path: 'addTodo/:id', component: CreateTodoComponent },
    { path: 'addTodo', component: CreateTodoComponent },
    { path: 'allTodos', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
