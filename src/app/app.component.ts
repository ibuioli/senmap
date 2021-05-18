import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OscService } from './osc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'senmap';
  public sender = false;
  /*Data*/
  // Acc
  public acc: any = {
    available: false,
    accx: 0,
    accy: 0,
    accz: 0
  };
  // Ori
  public ori: any = {
    available: false,
    alpha: 0,
    beta: 0,
    gamma: 0
  };
  // NoSensors
  public noSensors = true;

  /*Validators*/
  public numberControl = new FormControl('', [
    Validators.pattern('[0-9]*')
  ]);
  public ipControl = new FormControl('', [
    Validators.pattern('[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*')
  ]);

  /*Terms&Languages*/
  public terms: any = {
    data: 'Data',
    control: 'Control',
    start: 'Start Sending',
    stop: 'Stop',
    ip_format: 'Need IP format',
    number_format: 'Only numbers',
    no_sensor_message: 'No sensors Available',
    acc: 'Accelerometer',
    ori: 'Orientation'
  };

  /*App*/
  constructor(public osc: OscService) {}

  public ngOnInit(): void {
    document.addEventListener('deviceready', this.onDeviceReady, false);

    this.getAccelerometer();
    this.getOrientation();

    setInterval(() => {}, 50);  // Refresh the Sensor Data
  }

  /*Device Ready*/
  public onDeviceReady() {
    console.log('Device Ready');
  }

  /*Sensors*/
  public getAccelerometer() {
    window.ondevicemotion = (e) => {
      this.acc.available = true;
      this.noSensors = false;
      this.acc.accx = e.accelerationIncludingGravity.x;
      this.acc.accy = e.accelerationIncludingGravity.y;
      this.acc.accz = e.accelerationIncludingGravity.z;
    };
  }
  public getOrientation() {
    window.ondeviceorientation = (e) => {
      this.ori.available = true;
      this.noSensors = false;
      this.ori.alpha = e.alpha;
      this.ori.beta = e.beta;
      this.ori.gamma = e.gamma;
    };
  }
}
