import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMoyenne]'
})
export class MoyenneDirective {
  @Input("appMoyenne")
  set index(number: string){
    if ( parseInt(number)> 2){
      this._renderer.setStyle(this._el.nativeElement, 'background-color', 'yellow')
    }
    else if(parseInt(number) < 1 && parseInt(number) > -1){
      this._renderer.setStyle(this._el.nativeElement, 'background-color', 'red')
    }


  }
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

}
