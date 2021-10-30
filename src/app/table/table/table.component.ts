// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ElementRef } from '@angular/core';
// import interact from 'interactjs/index';
import { BaseComponent } from 'src/app/base.component';
import { constant } from 'src/app/common/constant';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent extends BaseComponent implements OnInit {

  borderString: string = '';
  style: string = 'solid';
  color: string = '#000000';
  thData: any[] = [];
  data: any[][] = [[]];

  private _columns: number = 1;
  private _rows: number = 1;

  set columns(value: number) {
    this._columns = value;
  }

  get columns(): number {
    return this._columns;
  }

  set rows(value: number) {
    this._rows = value;
  }

  get rows(): number {
    return this._rows;
  }

  constructor(
    public elRef: ElementRef,
    public common: CommonService
  ) {

    super(common, elRef);
    this.width = 400;
    this.setNameTitle(constant.table.name);
    this.data = [
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
      ['a', 'b', 'c']
    ]
  }

  ngOnInit() {
    const moverArea = this.el.querySelector('.mover-area') as HTMLElement;
    // interact(moverArea).draggable({
    //   onstart: (e: any) => {
    //     this.wasDrag = true;
    //   },
    //   onmove: (e: any) => {
    //     this.wasDrag = true;
    //     this.top = this.top + e.dy;
    //     this.left = this.left + e.dx;
    //   }
    // })
    // .resizable({
    //   edges: { left: true, right: true, bottom: false, top: false },
    // }).on('resizemove', (e) => {
    //   const _e = <any>e;
    //   const newWidth = _e.rect.width;
    //   // const newHeight = _e.rect.height;
    //   this.width = newWidth;
    //   // this.height = newHeight;
    //   this.top = this.top + _e.deltaRect.top;
    //   this.left = this.left + _e.deltaRect.left;
    // });
  }

  getThData(i: number): string {
    return this.thData[i];
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
