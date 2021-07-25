import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removehiphan'
})
export class RemoveHiphanPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.replace(' ', '-');
  }

}
