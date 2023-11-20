import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCoursesService {
  private tabCourses=[
    {
      id: 1,
      title: 'angular',
      author: 'Nidhal jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      keywords: ['component', 'binding', 'service'],
    },
    {
      id: 2,
      title: 'android',
      author: 'Mortadha boussaidi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      keywords: ['activity', 'intent', 'layout'],
    },
    {
      id: 3,
      title: 'ionic',
      author: 'mokhtar abbess',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['page', 'routing', 'directive'],
    },
  ];
  constructor() { }
  getAllCourses(){
    return this.tabCourses
  }
  getCourseById(id)
 {
   return this.tabCourses.find((element)=>element.id==id);
  }
  deleteCourse(course) {
    let i = this.tabCourses.indexOf(course);
    this.tabCourses.splice(i, 1);}

    addCourse(newCourse) {
      newCourse.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
      newCourse.keywords = newCourse.keywords.split(',');
      this.tabCourses.push(newCourse);
    }
  }

