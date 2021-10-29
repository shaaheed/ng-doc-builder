// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ElementRef } from '@angular/core';
import interact from 'interactjs/index';
import { BaseComponent } from '../../base.component';
import { constant } from '../../common/constant';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
})
export class AreaComponent extends BaseComponent implements OnInit {

  border: boolean = false;
  borderWidth: number = 1;
  borderStyle: string = 'solid';
  borderColor: string = '#000000';
  background: string = '#ffffff';

  constructor(
    public elRef: ElementRef,
    public common: CommonService) {

    super(common, elRef);
    this.setNameTitle(constant.area.name)
    this.width = 100;
    this.height = 100;

  }

  ngOnInit() {
    interact(this.el.firstChild as HTMLElement).draggable({
      onstart: (e: any) => {
        this.wasDrag = true;
      },
      onmove: (e: any) => {
        this.wasDrag = true;
        this.top = this.top + e.dy;
        this.left = this.left + e.dx;
      }
    }).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e: any) => {
      const _e = <any>e;
      this.width = _e.rect.width;
      this.height = _e.rect.height;
      this.top = this.top + _e.deltaRect.top;
      this.left = this.left + _e.deltaRect.left;
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
