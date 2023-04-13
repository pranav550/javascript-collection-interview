import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUnitTestApp';
  count:number=10;


  increaseCount(num:number){
    this.count=this.count+num;
  }

  
  decreaseCount(num:number){
    this.count=this.count-num;
  }


}


