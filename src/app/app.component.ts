import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senmap';
  /*Data*/
  //Acc
  public acc:boolean = false;
  public accx:number = 0;
  public accy:number = 0;
  public accz:number = 0;
  //Gyr
  public gyr:boolean = false;
  public gyrx:number = 0;
  public gyry:number = 0;
  public gyrz:number = 0;
  //Mag
  public mag:boolean = false;
  public magx:number = 0;
  public magy:number = 0;
  public magz:number = 0;
  //NoSensors
  public noSensors:boolean = true;

  /*Validators*/
  public numberControl = new FormControl('', [
    Validators.pattern('[0-9]*')
  ]);
  public ipControl = new FormControl('', [
    Validators.pattern('[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*')
  ]);

  /*App*/
  constructor(){}

  public ngOnInit():void{
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  public onDeviceReady():void{
    if(!this.acc && !this.gyr && !this.mag){
      this.noSensors = true;
    }else{
      this.noSensors = false;
    }
  }
}
