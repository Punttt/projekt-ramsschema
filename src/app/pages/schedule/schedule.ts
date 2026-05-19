import { Component } from '@angular/core';
import { PersonalCourseTable } from "../../partials/personal-course-table/personal-course-table";

@Component({
  selector: 'app-schedule',
  imports: [PersonalCourseTable],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule {}
