import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = signal<Todo[]>([]);

  addTask(task: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      task: task,
      isCompleted: false
    }
    this.todos.update(values => {
      return [...values, newTodo]
    });
  }

  toggleComplete(id: number) {    
    this.todos.update(values => {
      return values.map(todo => 
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    });
  }
}
