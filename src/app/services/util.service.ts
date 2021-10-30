// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Injectable } from "@angular/core";

@Injectable()
export class UtilService {

    interactResizable(
        input: {
            e: any,
            aspectRatio: boolean,
            widthRate: number,
            heightRate: number
        },
        dimensionCallback: (a: number, b: number) => void,
        positionCallback: (a: number, b: number) => void
    ) {
        const e = input.e;
        const newWidth = e.rect.width;
        const newHeight = e.rect.height;
        if (input.aspectRatio) {
            if (e.edges.right || e.edges.left) {
                if (dimensionCallback) {
                    dimensionCallback(newWidth, (newWidth * input.heightRate) | 0)
                }
            }
            if (e.edges.top || e.edges.bottom) {
                if (dimensionCallback) {
                    dimensionCallback((newHeight * input.widthRate) | 0, newHeight)
                }
            }
        } else {
            if (dimensionCallback) {
                dimensionCallback(newWidth, newHeight)
            }
        }
        if (positionCallback) {
            positionCallback(e.deltaRect.top, e.deltaRect.left)
        }
    }

}