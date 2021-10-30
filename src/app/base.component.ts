// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { CommonService } from "./services/common.service";
import { BaseCommonComponent } from "./base-common.component";
import { ElementRef } from "@angular/core";
import { constant } from "./common/constant";
import { uuid } from "./utils/utils";

export class BaseComponent extends BaseCommonComponent {

    wasDrag = false;
    id: string;
    el: HTMLElement;
    top: number = 0;
    left: number = 0;
    width: number = 0;
    height: number = 0;
    name: string = '';
    title: string = '';

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
}