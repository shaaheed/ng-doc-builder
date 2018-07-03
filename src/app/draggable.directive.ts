import { Directive, ElementRef, Input, Output } from '@angular/core';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {

  @Input() option: any;
  @Output() onDrag: DragEvent;

  private el: HTMLElement;

  constructor(private elRef: ElementRef) {
    this.el = <HTMLElement>elRef.nativeElement;
  }

  ngOnInit() {
    console.log(hasClass(this.el, 'block'));
    draggable(this.el, {
      // ondrag: (e) => { console.log('ondrag', e) },
      dragstart: (e) => { console.log('dragstart', e); e.dataTransfer.dropEffect = "copy" },
      dragend: (e) => { console.log('dragend', e) },
      // dragexit: (e) => { console.log('dragexit', e) },
      // dragleave: (e) => { console.log('dragleave', e) },
      dragenter: (e) => { console.log('dragenter', e) },
      // dragover: (e) => { console.log('dragover', e) }
    })
  }

}
