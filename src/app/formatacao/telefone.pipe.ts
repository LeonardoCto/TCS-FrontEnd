import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string): string {
    if(!telefone) {
      return telefone
    }



    return telefone.replace("@c.us", "").replace("55","");
  }

}
