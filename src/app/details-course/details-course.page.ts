import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(private activatedRoute: ActivatedRoute,
    private courseSer : ListCoursesService) { }

  ngOnInit() {
   let selectedId= this.activatedRoute.snapshot.paramMap.get('id');
   this.selectedCourse=this.courseSer.getCourseById(selectedId)
   console.log(this.selectedCourse)
  }

}
