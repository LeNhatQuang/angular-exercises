import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let e = parseFloat(exponent);
    return Math.pow(value, isNaN(e) ? 1 : e);
  }

}
