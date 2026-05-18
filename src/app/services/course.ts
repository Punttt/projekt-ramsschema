import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);
  private jsonUrl = "/miun_courses.json";

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.jsonUrl);
  }
}
