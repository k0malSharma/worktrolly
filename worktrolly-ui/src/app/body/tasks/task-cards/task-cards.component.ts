import { Component, Input, OnInit } from '@angular/core';
import { Tasks, TasksId } from 'src/app/Interface/TasksInterface';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  @Input('task') task: TasksId

  constructor() { }

  ngOnInit(): void {
  }

}
