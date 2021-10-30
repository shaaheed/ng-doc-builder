// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Subject, Subscription } from "rxjs";
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
            if (next) {
                next(n);
            }
        }, e => {
            if (error) {
                error(e);
            }
        }, () => {
            if (complete) {
                complete();
            }
        });
        this.subscriptions.push(subscription);
    }

    unsubscribe() {
        this.subscriptions.forEach(s => {
            s.unsubscribe();
        });
    }

}