// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ElementRef } from '@angular/core';
// import interact from 'interactjs/index';
import { BaseComponent } from 'src/app/base.component';
import { constant } from 'src/app/common/constant';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
})
export class LineComponent extends BaseComponent implements OnInit {

  borderString: string;
  style: string = 'solid';
  color: string = '#000000';

  private _border: number = 1;

  set border(value: number) {
    this._border = value;
    this.borderString = this.makeBorderStringFrom(value);
  }

  get border(): number {
    return this._border;
  }

  constructor(
    public elRef: ElementRef,
    public common: CommonService
  ) {

    super(common, elRef);
    this.width = 100;
    this.setNameTitle(constant.line.name)
    this.borderString = this.makeBorderStringFrom(this.border)
  }

  ngOnInit() {
    // interact(this.el.firstChild as HTMLElement).draggable({
    //   onstart: (e: any) => {
    //     this.wasDrag = true;
    //   },
    //   onmove: (e: any) => {
    //     this.wasDrag = true;
    //     this.top = this.top + e.dy;
    //     this.left = this.left + e.dx;
    //   }
    // }).resizable({
    //   edges: { left: true, right: true, bottom: false, top: false },
    // }).on('resizemove', (e: any) => {
    //   const newWidth = e.rect.width;
    //   this.width = newWidth;
    //   this.top = this.top + e.deltaRect.top;
    //   this.left = this.left + e.deltaRect.left;
    // });
  }

  makeBorderStringFrom(value: any): string {
    return `0 0 ${value}px 0`;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}