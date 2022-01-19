import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  stageIsShown: boolean = false ;
  freelanceIsShown : boolean = false;
  alternanceIsShown:boolean = false;
  frontendIsShown: boolean = false;
  flareIsShown: boolean = false;
  mthIsShown: boolean = false;
  MeIsShown: boolean = false;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;
  detailOnClick(id:String) {
    if(id=="alternance_detail"){
      this.alternanceIsShown = !this.alternanceIsShown;
    }
    else if(id=="freelance_detail"){
     this.freelanceIsShown = !this.freelanceIsShown;
    }
    else if (id == "stage_detail") {
      this.stageIsShown = !this.stageIsShown;
    }
    else if (id =="frontend_detail"){
      this.frontendIsShown = !this.frontendIsShown;
    }
    else if(id=="flare_detail"){
      this.flareIsShown = !this.flareIsShown;
    }
    else if (id == "mth_detail") {
      this.mthIsShown = !this.mthIsShown;
    }
    else if (id == "me_detail") {
      this.MeIsShown = !this.MeIsShown;
    }
   
  }
 
  constructor() { 
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

}
