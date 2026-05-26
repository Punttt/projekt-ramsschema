import { Component, computed, inject, OnInit } from '@angular/core';
import { Schedule } from '../../services/schedule';
import { Course } from '../../models/course';

@Component({
  selector: 'app-personal-course-table',
  imports: [],
  templateUrl: './personal-course-table.html',
  styleUrl: './personal-course-table.scss',
})
export class PersonalCourseTable {
  private scheduleService = inject(Schedule);

  // Läser in valda kurser från signalen
  courses = this.scheduleService.savedCourses;

  // Räknar poäng för kurserna i ramschemat
  totalPoints = computed(() =>
    this.courses().reduce((sum, course) => sum + course.points, 0)
  );

  deleteCourses(course: Course): void {
    this.scheduleService.removeCourse(course);
  }
}
