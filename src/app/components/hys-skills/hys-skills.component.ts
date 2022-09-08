import { Component, OnInit} from '@angular/core';
import { CircleProgressComponent, NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HysSkillsComponent implements OnInit {
  edicion:string='';
  borrar:string='';

  constructor() {  NgCircleProgressModule.forRoot({
    "backgroundGradient": true,
    "backgroundColor": "#ffffff",
    "backgroundGradientStopColor": "#c0c0c0",
    "backgroundPadding": -10,
    "radius": 60,
    "maxPercent": 100,
    "outerStrokeWidth": 10,
    "outerStrokeColor": "#61A9DC",
    "innerStrokeWidth": 0,
    "subtitleColor": "#25383C",
    "showInnerStroke": false,
    "startFromZero": false})}

    formatSubtitle = (percent: number) : string => {
      if(percent >= 100){
        return "al maximo!"
      }else if(percent >= 50){
        return "medio"
      }else if(percent > 0){
        return "iniciando"
      }else {
        return "pendiente/en aprendizaje"
      }
    }

  ngOnInit(): void {
  }

  
     
 
  

}
