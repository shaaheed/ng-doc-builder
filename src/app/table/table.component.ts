import { Component, OnInit, ElementRef } from '@angular/core';
import * as interact from 'interactjs'
import { BaseComponent } from '../base.component';
import { ImageService } from '../services/image.service';
import { property } from '../common/property-constant';
import { constant } from '../common/component-constant';
import { CommonService } from '../services/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent extends BaseComponent implements OnInit {

  top: number;
  left: number;
  width: number = 400;
  borderString: string;
  style: string = 'solid';
  color: string = '#000000';
  id: string;
  name: string = constant.table.name;
  title: string = constant.table.title;
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

  private el: HTMLElement;
  private wasDrag = false;

  constructor(
    private elRef: ElementRef,
    private common: CommonService) {

    super();
    this.el = elRef.nativeElement;
    this.id = uuid();
    this.data = [
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
      ['a', 'b', 'c']
    ]
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
    })
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
