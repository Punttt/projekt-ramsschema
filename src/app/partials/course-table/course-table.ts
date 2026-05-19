import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-table',
  imports: [],
  templateUrl: './course-table.html',
  styleUrl: './course-table.scss',
})
export class CourseTable {
  @Input() courses: Course[] = [];
  
}
