import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { constant } from '../common/component-constant';
import { TextComponent } from '../text/text.component';
import { LineComponent } from '../line/line.component';
import { TableComponent } from '../table/table.component';
import { CommonService } from '../services/common.service';
import { BaseComponent } from '../base.component';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent extends BaseComponent implements OnInit {

  isDropzoneHovered = false;
  @ViewChild('componentHost', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  private components: any[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private common: CommonService) {
    super();
  }

  ngOnInit() {
    // console.log(ui("#document"));

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
    console.log('from', from);
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
