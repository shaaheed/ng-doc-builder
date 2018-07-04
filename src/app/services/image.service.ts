import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IComponentService } from './icomponent.service';

@Injectable()
export class ImageService implements IComponentService {

    selectedComponent: { id: string; name: string; };
    componentClicked: Subject<{ id: string, name: string }> = new Subject();
    configClicked: Subject<any> = new Subject();
    valueChanged: Subject<{ component: string, property: string, newValue: any; oldValue: any; }> = new Subject();

    constructor() { }

    onComponentClick(component: { id: string, name: string }) {
        this.selectedComponent = component;
        this.componentClicked.next(component);
    }

}
