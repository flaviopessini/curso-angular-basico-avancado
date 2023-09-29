import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { ComponentFixture } from '@angular/core/testing';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  taskList: Array<TaskList> = [];

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  deleteAllTask(): void {
    const confirm = window.confirm(
      'Você deseja realmente apagar todas as tarefas?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  validationInput(event: string, index: number): void {
    if (event.length <= 0) {
      const confirm = window.confirm('Tarefa está vazia, deseja apagar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
