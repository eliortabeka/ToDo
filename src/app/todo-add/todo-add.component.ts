import {Component, OnInit} from '@angular/core';
import {TodosService} from "../core/services/todos.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todosService: TodosService,
              private formBuilder: FormBuilder) { }


  addTodoForm: FormGroup;
  ngOnInit(): void {
    this.addTodoForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(10), Validators.required]]
    })
  }

  get title() {
    return this.addTodoForm.get('title');
  }


  addNew() {
    if (!this.title.value) {
      return alert('No Task to add!')
    }
    if (this.addTodoForm.invalid) {
      return alert('invalid form')
    }
    this.todosService.addItem(
      {
        userId: 1,
        title: this.title.value,
        completed: false,
        id: +(Math.random() * 3).toFixed(2).replace('.', ''),
      }
    );
    this.addTodoForm.reset({
      title: ''
    })
  }

}
