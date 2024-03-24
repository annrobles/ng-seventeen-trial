import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.less'
})
export class TodoComponent {
  task = '';

  constructor(public todoService: TodoService) {}

  onSubmit(value: string) {
    if (this.task) {
      this.todoService.addTask(this.task);
      this.task = '';
    }
  }  
}

