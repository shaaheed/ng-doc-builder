import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';


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
    this.isDropzoneHovered = false;

    if (from == 'block') {
      // console.log('on drop', e, e.dataTransfer.getData('block'))
      const factory = this.componentFactoryResolver.resolveComponentFactory(ImageComponent);
      const component = factory.create(this.viewContainerRef.parentInjector);
      this.viewContainerRef.insert(component.hostView);
      component.instance.top = e.offsetY + 'px';
      component.instance.left = e.offsetX + 'px';
    }

  }

  dragOverEvent(e) {
    e.preventDefault();
    // console.log('drag over');
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
