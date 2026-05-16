import { Component } from '@angular/core';
import { CourseFilter } from "../../partials/course-filter/course-filter";
import { CourseTable } from "../../partials/course-table/course-table";

@Component({
  selector: 'app-courses',
  imports: [CourseFilter, CourseTable],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {}
