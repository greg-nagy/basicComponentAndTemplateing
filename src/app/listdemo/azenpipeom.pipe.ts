import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'azenpipeom'
})
export class AzenpipeomPipe implements PipeTransform {

  transform(value: any, times: number): any {
    return value.repeat(times);
  }

}
