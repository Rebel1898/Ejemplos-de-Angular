import { Component } from '@angular/core';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'myaoo';
  nombre:string= "Perico palotes";
  edad:number =25;


  
getName():string{



  return this.nombre+" " +this.title;
}
}

