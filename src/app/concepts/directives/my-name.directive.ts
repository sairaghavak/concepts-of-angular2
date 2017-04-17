import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myName]'
})
export class MyNameDirective implements OnInit {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'innerHTML', "Sai Raghava Katepally");
  }

}
