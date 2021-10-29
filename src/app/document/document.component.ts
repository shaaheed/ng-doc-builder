// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ElementRef } from '@angular/core';
import { ImageComponent } from '../image/image/image.component';
import { constant } from '../common/constant';
import { TextComponent } from '../text/text.component';
import { LineComponent } from '../line/line.component';
import { TableComponent } from '../table/table.component';
import { BaseComponent } from '../base.component';
import { AreaComponent } from '../area/area/area.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent extends BaseComponent implements OnInit {

  isDropzoneHovered = false;
  @ViewChild('componentHost', {
    read: ViewContainerRef
  }) viewContainerRef?: ViewContainerRef;

  private components: any[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public elRef: ElementRef,
    public common: CommonService) {
    super(common, elRef);
    // this.setNameTitle('document')
  }

  ngOnInit() {
    // copy component
    this.subscribe(this.common.copyComponent, x => {
      console.log('copy', x);
      const comRef = this.components[x.id];
      this.createComponent(comRef.componentType, x.left + 5, x.top - 5);
    });

    // delete component
    this.subscribe(this.common.deleteComponent, x => {
      console.log('delete', x);
      this.components[x.id].destroy();
      this.common.closeSettings.next();
    });

  }

  dropEvent(e: DragEvent) {
    e.preventDefault();

    const from = e.dataTransfer.getData('from');
    const componentType = e.dataTransfer.getData('component');
    this.isDropzoneHovered = false;

    if (from == 'block') {
      switch (componentType) {
        case constant.image.name:
          this.createComponent(ImageComponent, e.offsetX, e.offsetY);
          break;
        case constant.text.name:
          this.createComponent(TextComponent, e.offsetX, e.offsetY);
          break;
        case constant.line.name:
          this.createComponent(LineComponent, e.offsetX, e.offsetY);
          break;
        case constant.table.name:
          this.createComponent(TableComponent, e.offsetX, e.offsetY);
          break;
        case constant.area.name:
          this.createComponent(AreaComponent, e.offsetX, e.offsetY);
          break;
      }
    }

  }

  createComponent(componentRef, left, top) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentRef);
    const c = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(c.hostView);
    c.instance['top'] = top;
    c.instance['left'] = left;
    this.components[c.instance['id']] = c;
  }

  dragOverEvent(e) {
    e.preventDefault();
  }

  dragLeaveEvent(e) {
    this.isDropzoneHovered = false;
  }

  dragEnterEvent(e) {
    const from = e.dataTransfer.getData('from');
    if (from == 'block' || from == '') {
      this.isDropzoneHovered = true;
    } else {
      this.isDropzoneHovered = false;
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
