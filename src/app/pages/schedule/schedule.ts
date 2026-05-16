import { Component } from '@angular/core';
import { CourseTable } from "../../partials/course-table/course-table";

@Component({
  selector: 'app-schedule',
  imports: [CourseTable],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule {}
