import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, dec: number): string {
    let round = value.toFixed(dec);
    return round;
  }

}
