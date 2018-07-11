import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { constant } from '../common/component-constant';
import { CommonService } from '../services/common.service';
import * as interact from 'interactjs'
import { BaseComponent } from '../base.component';
import { MatAutocompleteTrigger } from '@angular/material';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent extends BaseComponent implements OnInit {

  id: string;
  name: string = constant.text.name;
  title: string = constant.text.title;
  top: string;
  left: string;
  width: number = 150;
  height: number = 22;
  color: string = '#000000';
  fontSize: number = 14;
  fontFamily: string = 'sans-serif';

  align: string = 'left';
  bold: boolean = false;
  italic: boolean = false;
  underline: boolean = false;

  macros: any[] = [
    { name: 'One', value: 'one' },
    { name: 'Two', value: 'two' },
    { name: 'Three', value: 'three' },
    { name: 'Four', value: 'four' },
  ];


  // @ViewChild('autoCompleteTrigger', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger;

  private el: HTMLElement;
  private wasDrag = false;

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
    private common: CommonService) {

    super();
    this.el = elRef.nativeElement;
    this.id = uuid();

  }

  ngOnInit() {

    const moverArea = this.el.querySelector('.mover-area');
    interact(moverArea).draggable({
      onstart: (e) => {
        this.wasDrag = true;
      },
      onmove: (e) => {
        this.wasDrag = true;
        this.top = this.top + e.dy;
        this.left = this.left + e.dx;
      }
    });

    interact(this.el.firstChild).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e) => {
      const _e = <any>e;
      this.width = _e.rect.width;
      this.height = _e.rect.height;
      this.top = this.top + _e.deltaRect.top;
      this.left = this.left + _e.deltaRect.left;
    });
  }

  openSettings(e) {
    // ignore drag ending click event
    if (this.wasDrag) {
      this.wasDrag = false;
    } else {
      this.common.setModel(this);
      this.common.openSettings.next();
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
