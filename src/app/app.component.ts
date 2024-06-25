import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';
import { fakeToDoItems } from './models/todoItem.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular 15 Giriş Dersleri';
  paragraph: string = "Bu HTML'e bind edilecek bir paragraph"
  createdDate : string = "24 Haziran 2024"
  isApproved : Boolean = true;

  countries: string[] = ["Türkiye", "KKTC", "Norveç", "İsveç", "Danimarka"]

  todoItems: TodoItem[] = fakeToDoItems;

  getUndoneTasksCount() : number{
    return this.todoItems.filter(todo => todo.isDone === false).length;
  };

  buttonText : string = 'Yapılan İşleri Gizle';

  isAllTasksShowing : Boolean = true;
  filter(): void{
    this.isAllTasksShowing = !this.isAllTasksShowing;
    if (!this.isAllTasksShowing){
      this.todoItems = this.todoItems.filter(todo=>!todo.isDone);
      this.buttonText = 'Hepsini Göster'
    }
    else{
      this.todoItems = fakeToDoItems;
      this.buttonText = 'Yapılan İşleri Gizle'
    }
  }

  addNewTask(name:string){
    this.todoItems.push(new TodoItem(name, false));
  }
}
