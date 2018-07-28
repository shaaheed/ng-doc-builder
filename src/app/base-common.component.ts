import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import { CommonService } from "./services/common.service";

export class BaseCommonComponent {

    subscriptions: Subscription[];

    constructor(public common: CommonService) {
        this.subscriptions = [];
    }

    subscribe<T>(
        subject: Subject<T>,
        next?: (value: T) => void,
        error?: (error: any) => void,
        complete?: () => void): void {
        const subscription = subject.subscribe(n => {
            next(n);
        }, e => {
            error(e);
        }, () => {
            complete();
        });
        this.subscriptions.push(subscription);
    }

    unsubscribe() {
        this.subscriptions.forEach(s => {
            s.unsubscribe();
        });
    }

}