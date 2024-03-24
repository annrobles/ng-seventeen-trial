import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.less'
})
export class TodoComponent {
  task = '';
  tasks: string[] = [];

  onSubmit(value: string) {
    this.tasks.push(value);
    this.task = '';
  }  
}
