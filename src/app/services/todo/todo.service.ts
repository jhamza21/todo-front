import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:8099/api';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todos`);
  }
  getTodoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/todo/${id}`);
  }
  
  addTodo(value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addTodo`,value);
  }
 
  updateTodo(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType: 'text'});
  }

}
