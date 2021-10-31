// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit, ElementRef } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { constant } from '../../common/constant';
import { CommonService } from '../../services/common.service';
import { environment } from '../../../environments/environment';
import interact from '@interactjs/interactjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent extends BaseComponent implements OnInit {

  set border(value: boolean) {
    this._border = value;
    this.calculateImageDimension();
  }

  get border() {
    return this._border;
  }

  set borderWidth(value: number) {
    this._borderWidth = value;
    this.calculateImageDimension();
  }
  get borderWidth() {
    return this._borderWidth;
  }

  borderStyle: string = 'solid';
  borderColor: string = '#000000';
  filename: string = '';
  aspectRatio: boolean = true;
  loader: boolean = false;

  imageWidth: number = 0;
  imageHeight: number = 0;

  private _src: string = '';
  private widthRate: number = 0;
  private heightRate: number = 0;
  private _borderWidth: number = 1;
  private _border: boolean = false;

  private imgEl: any;
  private base64ImagePrefix = 'data:image/png;base64,';

  set src(newSrc: string) {
    this._src = newSrc;
  }
  get src(): string {
    if (this._src) {
      return this._src;
    }
    return `${environment.basePath}assets/img-placeholder.png`;
  };

  constructor(
    public elRef: ElementRef,
    public common: CommonService) {
    super(common, elRef);
    this.setNameTitle(constant.image.name);
  }

  ngOnInit() {
    this.subscribe(this.dimensionChange, dimension => this.calculateImageDimension());

    this.width = 100;
    this.height = 100;

    this.imgEl = this.elRef.nativeElement.querySelector('img');
    interact(this.el.firstChild as HTMLElement).draggable({
      onstart: (e: any) => {
        this.wasDrag = true;
      },
      onmove: (e: any) => {
        this.wasDrag = true;
        this.top = this.top + e.dy;
        this.left = this.left + e.dx;
      }
    }).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
    }).on('resizemove', (e: any) => {
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

  loadEvent(e: any) {
    // getting width, height rate for maintaining aspect ratio of the image
    const naturalWidth = this.imgEl.naturalWidth;
    const naturalHeight = this.imgEl.naturalHeight;
    this.widthRate = naturalWidth / naturalHeight;
    this.heightRate = naturalHeight / naturalWidth;
  }

  showLoader(value: any) {
    this.loader = value;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  calculateImageDimension() {
    if (this.border) {
      this.imageWidth = this.width - (this.borderWidth * 2);
      this.imageHeight = this.height - (this.borderWidth * 2);
    }
    else {
      this.imageWidth = this.width;
      this.imageHeight = this.height;
    }
  }

}
