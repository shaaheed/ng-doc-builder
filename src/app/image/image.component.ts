import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as interact from 'interactjs'
import { ISubscription } from 'rxjs/Subscription';
import { BaseComponent } from '../base.component';
import { ImageService } from '../services/image.service';
import { property } from '../common/property-constant';
import { constant } from '../common/constant';
import { CommonService } from '../services/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent extends BaseComponent implements OnInit {

  border: boolean;
  borderWidth: number = 1;
  borderStyle: string = 'solid';
  borderColor: string = '#000000';
  filename: string;
  aspectRatio: boolean;
  loader: boolean = false;

  private _src: string;
  private widthRate: number;
  private heightRate: number;

  private imgEl: any;
  private base64ImagePrefix = 'data:image/png;base64,';

  set src(newSrc: string) {
    this._src = newSrc;
  }
  get src(): string {
    if (this._src) {
      return this._src;
    }
    return `${environment.basepath}assets/img-placeholder.png`;
  };

  constructor(
    public elRef: ElementRef,
    public common: CommonService) {

    super(common, elRef);
    this.width = 100;
    this.height = 100;
    this.setNameTitle(constant.image.name);
  }

  ngOnInit() {
    this.imgEl = this.elRef.nativeElement.querySelector('img');
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
      const newWidth = _e.rect.width;
      const newHeight = _e.rect.height;
      if (this.aspectRatio) {
        if (_e.edges.right || _e.edges.left) {
          this.width = newWidth;
          this.height = (newWidth * this.heightRate) | 0;
        }
        if (_e.edges.top || _e.edges.bottom) {
          this.height = newHeight;
          this.width = (newHeight * this.widthRate) | 0;
        }
      } else {
        this.width = newWidth;
        this.height = newHeight;
      }
      this.top = this.top + _e.deltaRect.top;
      this.left = this.left + _e.deltaRect.left;
    });
  }

  loadEvent(e) {
    // getting width, height rate for maintaining aspect ratio of the image
    const naturalWidth = this.imgEl.naturalWidth;
    const naturalHeight = this.imgEl.naturalHeight;
    this.widthRate = naturalWidth / naturalHeight;
    this.heightRate = naturalHeight / naturalWidth;
  }

  showLoader(value) {
    console.log('value', value);
    this.loader = value;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
