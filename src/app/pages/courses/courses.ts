import { Component, inject, OnInit } from '@angular/core';
import { CourseFilter } from "../../partials/course-filter/course-filter";
import { CourseTable } from "../../partials/course-table/course-table";
import { CourseService } from '../../services/course';

// Lägger in typer för sortering
export type SortColumn = 'courseCode' | 'courseName' | 'points' | 'subject';
export type SortDirection = 'asc' | 'desc';

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

  // sorteringstillstånd
  sortColumn: SortColumn | null = null;
  sortDirection: SortDirection = 'asc';

  // Hela kurslistan från service
  allCourses = this.courseService.courses;

  // Filtrera och sortera listan
  get filteredCourses() {
    const search = this.searchText.toLowerCase();
    const subject = this.subjectText.toLowerCase();

    const filtered = this.allCourses().filter(course => {
      const matchSearch = !search
        || course.courseCode.toLowerCase().includes(search)
        || course.courseName.toLowerCase().includes(search);

      const matchSubject = !subject
        || course.subject.toLowerCase().includes(subject);

      return matchSearch && matchSubject;
    });

    // sorterar
    if(!this.sortColumn) {
      return filtered;
    }

    const col = this.sortColumn;
    const dir = this.sortDirection;

    return [...filtered].sort((a, b) => {
      let result = 0;

      if (col === 'points') {
        // Numerisk sortering
        result = a.points - b.points;
      } else {
        // Sträng-sortering
        result = a[col].localeCompare(b[col], 'sv');
      }

      return dir === 'asc' ? result : -result;
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
    if (this.sortColumn === column ) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }
}
