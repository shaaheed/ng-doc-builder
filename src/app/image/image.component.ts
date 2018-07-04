import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ElementRef, ViewChild } from '@angular/core';
import * as interact from 'interactjs'
import { CommonService } from '../common.service';
import { ISubscription } from 'rxjs/Subscription';
import { BaseComponent } from '../base.component';
import { ImageService } from '../services/image.service';
import { property } from '../common/property-constant';
import { component } from '../common/component-constant';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent extends BaseComponent implements OnInit {

  top: string = "10px";
  left: string = "10px";
  width: string = "100px";
  height: string = "100px";
  border: string = "1px solid red";
  src: string = '';
  id: string;

  private el: HTMLElement;
  private base64ImagePrefix = 'data:image/png;base64,';
  private wasDrag = false;

  constructor(
    private elRef: ElementRef,
    private service: ImageService) {

    super();
    this.el = elRef.nativeElement;
    this.id = uuid();
  }

  ngOnInit() {

    this.subscribe(this.service.valueChanged, value => {
      if (this.id === value.component) {
        switch (value.property) {
          case property.src:
            this.src = value.newValue;
            break;
        }
      }
    });

    interact(this.el.firstChild).draggable({
      onstart: (e) => {
        this.wasDrag = true;
      },
      onmove: (e) => {
        this.wasDrag = true;
        this.top = parseInt(this.top) + e.dy + 'px';
        this.left = parseInt(this.left) + e.dx + 'px';
      }
    }).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e) => {
      this.width = (<any>e).rect.width + 'px';
      this.height = (<any>e).rect.height + 'px';
      this.top = parseInt(this.top) + (<any>e).deltaRect.top + 'px';
      this.left = parseInt(this.left) + (<any>e).deltaRect.left + 'px';
    });
  }

  dragEvent(e) {

  }

  clickEvent(e) {
    if (this.wasDrag) {
      this.wasDrag = false;
    } else {
      console.log('click')
      this.service.onComponentClick({ id: this.id, name: component.image });
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
