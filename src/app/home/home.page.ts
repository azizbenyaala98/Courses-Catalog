import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  allCourses= [];

  constructor(private  courseSer : ListCoursesService,
    ) {}
  ngOnInit(){
    this.allCourses=this.courseSer.getAllCourses()
  }

}
