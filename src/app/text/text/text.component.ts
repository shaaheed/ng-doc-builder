// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ElementRef } from '@angular/core';
import { constant } from '../../common/constant';
import { BaseComponent } from '../../base.component';
import { CommonService } from '../../services/common.service';
import interact from '@interactjs/interactjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent extends BaseComponent implements OnInit {

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

  constructor(
    public elRef: ElementRef,
    public common: CommonService) {

    super(common, elRef);
    this.setNameTitle(constant.text.name);
    this.width = 150;
    this.height = 31;

  }

  ngOnInit() {

    const moverArea = this.el.querySelector('.mover-area') as HTMLElement;
    interact(moverArea).draggable({
      onstart: (e: any) => {
        this.wasDrag = true;
      },
      onmove: (e: any) => {
        this.wasDrag = true;
        this.top = this.top + e.dy;
        this.left = this.left + e.dx;
      }
    });

    interact(this.el.firstChild as HTMLElement).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e: any) => {
      this.width = e.rect.width;
      this.height = e.rect.height;
      this.top = this.top + e.deltaRect.top;
      this.left = this.left + e.deltaRect.left;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}