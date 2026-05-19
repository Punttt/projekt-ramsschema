import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-course-table',
  imports: [],
  templateUrl: './personal-course-table.html',
  styleUrl: './personal-course-table.scss',
})
export class PersonalCourseTable implements OnInit{
  courses: any[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('savedCourses');
    this.courses = saved ? JSON.parse(saved) : [];

    console.log(`Antal sparade kurser är: ${this.courses.length}`);
  }

  deleteCourse(course: any){
    this.courses = this.courses.filter(c =>
      c.courseCode !== course.courseCode || c.subjectCode !== course.subjectCode
    );
    localStorage.setItem('savedCourses', JSON.stringify(this.courses));
  }
}
