import {Component, Input} from '@angular/core';
import {TodoModel} from "../core/interfaces/todo.interface";
import {TodosService} from "../core/services/todos.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoModel;

  constructor(private todosService:TodosService) {}

  toggleStatus() {
    this.todosService.editItem(this.item);
  }

  removeItem() {
    this.todosService.removeItem(this.item);
  }

}
