function uuid() { // Public Domain/MIT
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

function on(el, en, f) {
    el.addEventListener(en, f);
}

function off(el, en, f) {
    el.removeEventListener(en, f, false);
}

function hasClass(el, klass) {
    let hasClass = false;
    el.classList.forEach(_klass => {
        if (_klass === klass) {
            hasClass = true;
            return;
        }
    });
    return hasClass;
}

function addClass(el, klass) {
    if (!hasClass(el, klass)) {
        el.classList.add(klass);
    }
}

function removeClass(el, klass) {
    if (hasClass(el, klass)) {
        el.classList.remove(klass);
    }
}

function getFileAsDataURL(e, callback) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        if(callback){
            callback({filename: file.name, dataURL: reader.result})
        }
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}

