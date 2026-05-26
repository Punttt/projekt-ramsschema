import { Injectable, Signal, signal } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class Schedule {
  private storageKey = "savedCourses";

  // Privat signal med valda kurser
  private savedCoursesSignal = signal<Course[]>(this.loadFromStorage());

  // Publik readonly signal
  savedCourses: Signal<Course[]> = this.savedCoursesSignal.asReadonly();

  // Läs in från local storage
  private loadFromStorage(): Course[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  // Spara till local storaage
  private saveToStorage(courses: Course[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }

  // Lägga till kurs - validering för dubblett
  addCourse(course: Course): boolean {
    const current = this.savedCoursesSignal();
    const exists = current.some(c => c.courseCode === course.courseCode && c.subjectCode === course.subjectCode);

    if(exists) {
      return false;
    }

    const updated = [...current, course];
    this.savedCoursesSignal.set(updated);
    this.saveToStorage(updated);
    return true;
  }

  // Ta bort kurs från locall
  removeCourse(course: Course): void {
    const updated = this.savedCoursesSignal().filter(c =>
      c.courseCode !== course.courseCode || c.subjectCode !== course.subjectCode
    );

    this.savedCoursesSignal.set(updated);
    this.saveToStorage(updated);
  }

  // Summerar antal poäng i ramschemeat
  getTotalPoints(): number {
    return this.savedCoursesSignal().reduce((sum, course) => sum + course.points, 0);
  }
}
