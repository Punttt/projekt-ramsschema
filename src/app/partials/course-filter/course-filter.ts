import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-filter',
  imports: [FormsModule],
  templateUrl: './course-filter.html',
  styleUrl: './course-filter.scss',
})
export class CourseFilter {
  searchText: string = "";
  subjectText: string = "";

  @Output() searchChange = new EventEmitter<string>();
  @Output() subjectChange = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchChange.emit(this.searchText);
  }

  onSubjectChange(): void {
    this.subjectChange.emit(this.subjectText);
  }

}
