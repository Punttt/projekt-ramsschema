import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { SortColumn } from '../../pages/courses/courses';
import { Schedule } from '../../services/schedule';

@Component({
  selector: 'app-course-table',
  imports: [],
  templateUrl: './course-table.html',
  styleUrl: './course-table.scss',
})
export class CourseTable {
  private scheduleService = inject(Schedule);

  @Input() courses: Course[] = [];
  @Input() sortColumn: SortColumn | null = null;
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  @Output() sortChange = new EventEmitter<SortColumn>();

  onHeaderClick(column: SortColumn): void {
    this.sortChange.emit(column);
  }
  
  addCourse(course: Course) {
    const added = this.scheduleService.addCourse(course);

    if(added) {
      console.log("Kurs är sparad: " + course.courseCode);
    } else {
      console.log("Kursen är redan sparad!");
    }
  }
}
