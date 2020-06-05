import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo) {
    //  Toggle on UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('delete', todo.id);
  }
}
