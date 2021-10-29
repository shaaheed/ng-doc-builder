import { Injectable } from "@angular/core";
import { InteractEvent } from "interactjs";

@Injectable()
export class UtilService {

    public inretactResizable(input: {
        e: InteractEvent,
        aspectRatio: boolean,
        widthRate: number,
        heightRate: number
    },
        dimentionCallback, positionCallback) {
        const e = <any>input.e;
        const newWidth = e.rect.width;
        const newHeight = e.rect.height;
        if (input.aspectRatio) {
            if (e.edges.right || e.edges.left) {
                if (dimentionCallback) {
                    dimentionCallback(newWidth, (newWidth * input.heightRate) | 0)
                }
            }
            if (e.edges.top || e.edges.bottom) {
                if (dimentionCallback) {
                    dimentionCallback((newHeight * input.widthRate) | 0, newHeight)
                }
            }
        } else {
            if (dimentionCallback) {
                dimentionCallback(newWidth, newHeight)
            }
        }
        if (positionCallback) {
            positionCallback(e.deltaRect.top, e.deltaRect.left)
        }
    }

}