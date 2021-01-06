import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoModel} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  saveTodos(items: any[]) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', JSON.stringify(items))
  }

  private _editItem = new EventEmitter();
  editItem$ = this._editItem.asObservable();
  editItem(item: TodoModel) { this._editItem.next(item) };

  private _removeItem = new EventEmitter();
  removeItem$ = this._removeItem.asObservable();
  removeItem(item: TodoModel) { this._removeItem.next(item) };

  private _addItem = new EventEmitter();
  addItem$ = this._addItem.asObservable();
  addItem(item: TodoModel) { this._addItem.next(item) };

}
