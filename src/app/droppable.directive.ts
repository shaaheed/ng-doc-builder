import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[droppable]'
})
export class DroppableDirective {

  @Input() option: any;

  private el: HTMLElement;
  private dhc = 'dd-droppable-hover';

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    droppable(this.el, {
      // ondrag: (e) => { console.log('ondrag', e) },
      drop: (e) => {
        e.preventDefault();
        console.log('drop', e);
        removeClass(this.el, this.dhc);
        const b = <any>document.querySelector('.block').cloneNode(true);
        b.style.position = 'absolute';
        b.style.top = e.clientY + 'px';
        b.style.left = e.clientX + 'px';
        b.style.border = '1px solid red';
        b.style.width = '100px';
        b.style.height = '100px';
        const bb = document.body.appendChild(b);
      },
      dragend: (e) => { console.log('dragend', e) },
      dragexit: (e) => { console.log('dragexit', e) },
      dragleave: (e) => {
        console.log('dragleave', e)
        removeClass(this.el, this.dhc);
      },
      dragenter: (e) => {
        addClass(this.el, this.dhc);
        console.log('dragenter', e)
      },
      dragover: (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        // console.log('droppable - dragover', e)
      }
    })
  }

}
