import { Injectable } from '@angular/core';
declare var OSC:any;

@Injectable({
  providedIn: 'root'
})
export class OscService {
  public interval:any;
  public sender:boolean;

  constructor() { }

  /*Control*/
  public startSending(ip, port, acc, ori):any{
    console.log("Start Sending: ", ip+":"+port);
    this.sender = true;

    let osc = new OSC();
		osc.startListening(10800,
  	  function(){
  	    console.log('Listen');
  	  },
  	  function(err){
  	    console.log('Error: ', err);
  	  }
    );

    this.interval = setInterval(function(){
      if(acc.available){
        osc.send({
          remoteAddress: ip,
          remotePort: port,
          address: '/acc',
          arguments: [acc.accx, acc.accy, acc.accz]
        });
      }
      if(ori.available){
        osc.send({
          remoteAddress: ip,
          remotePort: port,
          address: '/ori',
          arguments: [ori.alpha, ori.beta, ori.gamma]
        });
      }
    }, 50);

  }

  public stopSending():void{
    clearInterval(this.interval);
    this.sender = false;
  }
}
