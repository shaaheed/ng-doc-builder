import { CommonService } from "./services/common.service";
import { BaseCommonComponent } from "./base-common.component";
import { ElementRef } from "@angular/core";
import { constant } from "./common/constant";

export class BaseComponent extends BaseCommonComponent {

    wasDrag = false;
    id: string;
    el: HTMLElement;
    top: number;
    left: number;
    width: number;
    height: number;
    name: string;
    title: string;

    constructor(
        public common: CommonService,
        public elRef: ElementRef) {
        super(common)
        this.id = uuid();
        this.el = elRef.nativeElement;
    }

    setNameTitle(component) {
        this.name = constant[component].name;
        this.title = constant[component].title;
    }

    openSettings(e) {
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