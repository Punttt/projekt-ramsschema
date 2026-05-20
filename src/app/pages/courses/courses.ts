import { Component, inject, OnInit } from '@angular/core';
import { CourseFilter } from "../../partials/course-filter/course-filter";
import { CourseTable } from "../../partials/course-table/course-table";
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [CourseFilter, CourseTable, AsyncPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})

export class Courses {
  private courseService = inject(CourseService);
  courses$: Observable<Course[]> = this.courseService.getCourses();
}
