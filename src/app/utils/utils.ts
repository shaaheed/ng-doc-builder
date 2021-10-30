// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

export const uuid = () => { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export const on = (el: HTMLElement, type: any, listener: any) => {
    el.addEventListener(type, listener);
}

export const off = (el: HTMLElement, type: any, listener: any) => {
    el.removeEventListener(type, listener, false);
}

export const hasClass = (el: HTMLElement, _class: string) => {
    let hasClass = false;
    el.classList.forEach(cls => {
        if (cls === _class) {
            hasClass = true;
            return;
        }
    });
    return hasClass;
}

export const addClass = (el: HTMLElement, _class: string) => {
    if (!hasClass(el, _class)) {
        el.classList.add(_class);
    }
}

export const removeClass = (el: HTMLElement, _class: string) => {
    if (hasClass(el, _class)) {
        el.classList.remove(_class);
    }
}

export const getFileAsDataURL = (
    e: any,
    callback?: (agr: any) => void,
    load?: (arg: boolean) => void
) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("loadstart", (e) => {
        if (load) { load(true); }
    });
    reader.addEventListener("loadend", (e) => {
        if (callback) {
            callback({ filename: file.name, dataURL: reader.result })
        }
        if (load) { load(false); }
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}