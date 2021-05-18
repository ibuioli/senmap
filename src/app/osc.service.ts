import { Injectable } from '@angular/core';
declare var OSC: any;

@Injectable({
  providedIn: 'root'
})
export class OscService {
  public interval: any;
  public sender: boolean;

  constructor() { }

  /*Control*/
  public startSending(ip: string, port: string, acc: any, ori: any): any {
    console.log('Start Sending: ', ip + ':' + port);
    this.sender = true;

    const osc = new OSC();
    osc.startListening(10800,
      () => {
        console.log('Listen');
      }, (err: any) => {
        console.log('Error: ', err);
    });

    this.interval = setInterval(() => {
      if (acc.available) {
        osc.send({
          remoteAddress: ip,
          remotePort: port,
          address: '/acc',
          arguments: [acc.accx, acc.accy, acc.accz]
        });
      }
      if (ori.available) {
        osc.send({
          remoteAddress: ip,
          remotePort: port,
          address: '/ori',
          arguments: [ori.alpha, ori.beta, ori.gamma]
        });
      }
    }, 50);

  }

  public stopSending(): void {
    clearInterval(this.interval);
    this.sender = false;
  }
}
