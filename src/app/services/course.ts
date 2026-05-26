import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);
  private jsonUrl = "/miun_courses.json";

    // Privat signal som håller listan
    private coursesSignal = signal<Course[]>([]);

    // Publikt readonly signal - kan läsas av komponenter
    courses: Signal<Course[]> = this.coursesSignal.asReadonly();

    constructor() {
        this.loadCourses();
    }

    private loadCourses(): void {
        this.http.get<Course[]>(this.jsonUrl).subscribe(data => {
            this.coursesSignal.set(data);
        });
    }
}
