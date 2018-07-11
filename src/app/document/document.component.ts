import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { constant } from '../common/component-constant';
import { TextComponent } from '../text/text.component';
import { LineComponent } from '../line/line.component';
import { TableComponent } from '../table/table.component';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent implements OnInit {

  isDropzoneHovered = false;
  @ViewChild('componentHost', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // console.log(ui("#document"));
  }

  dropEvent(e: DragEvent) {
    e.preventDefault();

    const from = e.dataTransfer.getData('from');
    const componentType = e.dataTransfer.getData('component');
    this.isDropzoneHovered = false;

    if (from == 'block') {
      switch (componentType) {
        case constant.image.name:
          this.crateComponent(ImageComponent, e.offsetX, e.offsetY);
          break;
        case constant.text.name:
          this.crateComponent(TextComponent, e.offsetX, e.offsetY);
          break;
        case constant.line.name:
          this.crateComponent(LineComponent, e.offsetX, e.offsetY);
          break;
        case constant.table.name:
          this.crateComponent(TableComponent, e.offsetX, e.offsetY);
          break;
      }
    }

  }

  crateComponent(componentRef, left, top) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentRef);
    const c = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(c.hostView);
    c.instance['top'] = top;
    c.instance['left'] = left;
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

}
