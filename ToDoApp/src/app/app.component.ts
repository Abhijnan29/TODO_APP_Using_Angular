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

    // For editing
  isEditing: boolean = false;
  editingTaskId: number | null = null;

  
  // addtask(){
  //    this.taskList.push({id:this.taskList.length,desc:this.task});

  //    this.task = ''; // Clear input
  // }


  addtask() {
    if (this.isEditing && this.editingTaskId !== null) {
      const index = this.taskList.findIndex((t) => t.id === this.editingTaskId); // Finding Index 
      // Checking tasklist empty or not 
      if (index > -1) {                         
        this.taskList[index].desc = this.task;
      }
      this.isEditing = false;
      this.editingTaskId = null;
    } else {
      this.taskList.push({ id: this.taskList.length, desc: this.task });  // Adding Task
    }

    this.task = ''; // Clear input
  }

  deletetask(id:number){
    this.taskList =this.taskList.filter((item)=>item.id!=id);
  }

  edittask(task: { id: number; desc: string }) {
    this.task = task.desc;
    this.editingTaskId = task.id;
    this.isEditing = true;
  }

}

