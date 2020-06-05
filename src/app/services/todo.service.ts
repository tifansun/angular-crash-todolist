import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/Todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private  http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }
}
