import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { SortColumn } from '../../pages/courses/courses';

@Component({
  selector: 'app-course-table',
  imports: [],
  templateUrl: './course-table.html',
  styleUrl: './course-table.scss',
})
export class CourseTable {
  @Input() courses: Course[] = [];
  @Input() sortColumn: SortColumn | null = null;
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  @Output() sortChange = new EventEmitter<SortColumn>();

  onHeaderClick(column: SortColumn): void {
    this.sortChange.emit(column);
  }
  
  addCourse(course: Course) {
    const saved = localStorage.getItem('savedCourses');
    const savedCourses = saved ? JSON.parse(saved) : [];
    
    // Kolla om kursen redan är sparad
    const exists = savedCourses.find((c: Course) => c.courseCode === course.courseCode);
    
    if (!exists) {
      savedCourses.push(course);
      localStorage.setItem('savedCourses', JSON.stringify(savedCourses));
      console.log('Kurs sparad:', course.courseCode);
    } else {
      console.log('Kursen är redan sparad');
    }
  }
}
