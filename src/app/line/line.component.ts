import { Component, OnInit, ElementRef } from '@angular/core';
import * as interact from 'interactjs'
import { BaseComponent } from '../base.component';
import { ImageService } from '../services/image.service';
import { property } from '../common/property-constant';
import { constant } from '../common/component-constant';
import { CommonService } from '../services/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
})
export class LineComponent extends BaseComponent implements OnInit {

  top: number;
  left: number;
  width: number = 100;
  borderString: string;
  style: string = 'solid';
  color: string = '#000000';
  id: string;
  name: string = constant.line.name;
  title: string = constant.line.title;

  private _border: number = 1;

  set border(value: number) {
    this._border = value;
    this.borderString = this.makeBorderStringFrom(value);
  }

  get border(): number {
    return this._border;
  }

  private el: HTMLElement;
  private wasDrag = false;

  constructor(
    private elRef: ElementRef,
    private common: CommonService) {

    super();
    this.el = elRef.nativeElement;
    this.id = uuid();
    this.borderString = this.makeBorderStringFrom(this.border)
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
    }).resizable({
      edges: { left: true, right: true, bottom: false, top: false },
    }).on('resizemove', (e) => {
      const _e = <any>e;
      const newWidth = _e.rect.width;
      this.width = newWidth;
      this.top = this.top + _e.deltaRect.top;
      this.left = this.left + _e.deltaRect.left;
    });
  }

  makeBorderStringFrom(value): string {
    return `0 0 ${value}px 0`;
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

  delete() {
    // this.viewContainerRef.
  }

}
