import { Component, OnInit, ElementRef } from '@angular/core';
import * as interact from 'interactjs'
import { BaseComponent } from '../base.component';
import { constant } from '../common/constant';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
})
export class AreaComponent extends BaseComponent implements OnInit {

  border: boolean;
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
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e) => {
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
