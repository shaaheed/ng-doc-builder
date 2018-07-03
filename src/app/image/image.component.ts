import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ElementRef } from '@angular/core';
import * as interact from 'interactjs'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit {

  top: string = "10px";
  left: string = "10px";
  width: string = "100px";
  height: string = "100px";
  border: string = "1px solid red";

  private p1: number;
  private p2: number;
  private p3: number;
  private p4: number;

  private el: HTMLElement;

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    interact(this.el).draggable({
      onmove: (e) => {
        this.top = parseInt(this.top) + e.dy + 'px';
        this.left = parseInt(this.left) + e.dx + 'px';
      }
    });

  }

  // mouseDownEvent(e) {
  //   e.preventDefault();
  //   this.p3 = e.clientX;
  //   this.p4 = e.clientY;
  //   on(document, 'mouseup', this.documentMouseUpEvent.bind(this));
  //   on(document, 'mousemove', this.documentMouseMoveEvent.bind(this));
  // }

  // documentMouseUpEvent(e) {
  //   off(document, 'mouseup', this.documentMouseUpEvent.bind(this));
  //   off(document, 'mousemove', this.documentMouseMoveEvent.bind(this));
  // }

  // documentMouseMoveEvent(e) {
  //   e.preventDefault();

  //   console.log('doc mouse move', e)
  //   // calculate the new cursor position:
  //   this.p1 = this.p3 - e.clientX;
  //   this.p2 = this.p4 - e.clientY;
  //   this.p3 = e.clientX;
  //   this.p4 = e.clientY;
  //   // set the element's new position:
  //   // this.top = (this.el.offsetTop - this.p2) + "px";
  //   // this.left = (this.el.offsetLeft - this.p1) + "px";
  //   this.top = e.offsetY + 'px';
  //   this.left = e.offsetX + 'px';

  // }

}
