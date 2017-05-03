<pre class="prettyprint">
/*
 * @Author: Sai Raghava Katepally 
 * @Date: 2017-04-17 23:03:00 
 * @Last Modified by: Sai Raghava Katepally 
 * @Last Modified time: 2017-04-17 23:03:00 
 */
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
</pre>
<span>myName custom attribute directive usage in a template.</span>
<pre class="prettyprint lang-html"><xmp>
<div myName></div>
</xmp></pre>