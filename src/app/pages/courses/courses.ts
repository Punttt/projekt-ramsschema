import { Component, inject, OnInit } from '@angular/core';
import { CourseFilter } from "../../partials/course-filter/course-filter";
import { CourseTable } from "../../partials/course-table/course-table";
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses',
  imports: [CourseFilter, CourseTable],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit{
  private courseService = inject(CourseService);
  courses: Course[] = [];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
