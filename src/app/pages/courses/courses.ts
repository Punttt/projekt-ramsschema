import { Component, inject, OnInit } from '@angular/core';
import { CourseFilter } from "../../partials/course-filter/course-filter";
import { CourseTable } from "../../partials/course-table/course-table";
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-courses',
  imports: [CourseFilter, CourseTable],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})

export class Courses {
  private courseService = inject(CourseService);

  // Filtervärden
  searchText = "";
  subjectText = "";

  // Hela kurslistan från service
  allCourses = this.courseService.courses;

  // Filtrerad lista - beräknas om varje gång den läses
  get filteredCourses() {
    const search = this.searchText.toLowerCase();
    const subject = this.subjectText.toLowerCase();

    return this.allCourses().filter(course => {
      const matchSearch = !search
        || course.courseCode.toLowerCase().includes(search)
        || course.courseName.toLowerCase().includes(search);

      const matchSubject = !subject
        || course.subject.toLowerCase().includes(subject);

      return matchSearch && matchSubject;
    });
  }

  // Anropar när använddaren skriver i sökfältet
  onSearchChange(value:string): void {
    this.searchText = value;
  }

  // Anropas när användaren skriver i änmnesfältet
  onSubjectChange(value: string): void {
    this.subjectText = value;
  }

  // Anropas när man klickar på kolumn för sortering
  onSortChange(column: SortColumn): void {
    if (this.SortColumn === column ) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.SortColumn = column;
      this.sortDirection = 'asc';
    }
  }
}
