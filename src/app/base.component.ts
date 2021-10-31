// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonService } from "./services/common.service";
import { BaseCommonComponent } from "./base-common.component";
import { ElementRef, EventEmitter } from "@angular/core";
import { constant } from "./common/constant";
import { uuid } from "./utils/utils";

export class BaseComponent extends BaseCommonComponent {

    wasDrag = false;
    id: string;
    el: HTMLElement;
    name: string = '';
    title: string = '';

    top: number = 0;
    topUnit: string = 'px';

    left: number = 0;
    leftUnit: string = 'px';

    set width(value: number) {
        this._width = value;
        this.emitDimension('width', value);
    }
    get width() {
        return this._width;
    }
    widthUnit: string = 'px';

    set height(value: number) {
        this._height = value;
        this.emitDimension('height', value);
    }
    get height() {
        return this._height;
    }
    heightUnit: string = 'px';

    dimensionChange: EventEmitter<any> = new EventEmitter();

    private _width: number = 0;
    private _height: number = 0;

    constructor(
        public common: CommonService,
        public elRef: ElementRef) {
        super(common)
        this.id = uuid();
        this.el = elRef.nativeElement;
    }

    setNameTitle(component: string) {
        const c = constant as any
        this.name = c[component].name;
        this.title = c[component].title;
    }

    openSettings(e: any) {
        // ignore drag ending click event
        if (this.wasDrag) {
            this.wasDrag = false;
        } else {
            this.common.setModel(this);
            this.common.openSettings.next();
        }
    }

    delete() {
        this.common.deleteComponent.next(this);
    }

    copy() {
        this.common.copyComponent.next(this);
    }

    private emitDimension(type: string, value: number) {
        this.dimensionChange.emit({ type: type, value: value });
    }
}