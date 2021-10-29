// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageComponent } from '../image/image/image.component';

@Injectable()
export class ImageService {

    model?: ImageComponent;
    selectedComponent?: { id: string; name: string; };
    componentClicked: Subject<{ id: string, name: string }> = new Subject();
    configClicked: Subject<any> = new Subject();
    constructor() { }

    onComponentClick(component: { id: string, name: string }) {
        this.selectedComponent = component;
        this.componentClicked.next(component);
    }

}
