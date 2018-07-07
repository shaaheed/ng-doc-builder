import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { component } from '../common/component-constant';
import { CommonService } from '../services/common.service';
import * as interact from 'interactjs'

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent implements OnInit {

  id: string;
  name: string = component.text.name;
  title: string = component.text.title;
  top: string;
  left: string;
  width: number;
  height: number;

  private el: HTMLElement;
  private wasDrag = false;

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
    private common: CommonService) {

    this.el = elRef.nativeElement;
    this.id = uuid();

  }

  ngOnInit() {
    interact(this.el.firstChild).draggable({
      onstart: (e) => {
        this.wasDrag = true;
      },
      onmove: (e) => {
        this.wasDrag = true;
        this.top = this.top + e.dy;
        this.left = this.left + e.dx;
      }
    })
    .resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e) => {
      const _e = <any>e;
      this.width = _e.rect.width;
      this.height = _e.rect.height;
      this.top = this.top + _e.deltaRect.top;
      this.left = this.left + _e.deltaRect.left;
    });
  }

}
