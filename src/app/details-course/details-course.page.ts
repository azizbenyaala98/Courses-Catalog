import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(private activatedRoute: ActivatedRoute,
    private courseSer : ListCoursesService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
   let selectedId= this.activatedRoute.snapshot.paramMap.get('id');
   this.selectedCourse=this.courseSer.getCourseById(selectedId)
   console.log(this.selectedCourse)
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
