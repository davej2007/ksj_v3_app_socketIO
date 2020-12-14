import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayYesNo'
})
export class DisplayYesNoPipe implements PipeTransform {
  transform(data:Boolean): unknown {
      return data ? 'Yes' : 'No'
  }
}
