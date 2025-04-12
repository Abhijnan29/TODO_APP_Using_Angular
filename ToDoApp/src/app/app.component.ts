import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';

  task='';
  taskList:{id:number,desc:string}[]=[];

  addtask(){
    this.taskList.push({id:this.taskList.length,desc:this.task});
  }

  deletetask(id:number){
    this.taskList =this.taskList.filter((item)=>item.id!=id);
  }
}

