import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {

    private model: any;
    openSettings: Subject<any> = new Subject();
    closeSettings: Subject<any> = new Subject();
    deleteComponent: Subject<any> = new Subject();
    copyComponent: Subject<any> = new Subject();

    constructor() { }

    setModel<T>(model: T) {
        this.model = model;
    }

    getModel<T>(): T {
        return <T>this.model;
    }

}
