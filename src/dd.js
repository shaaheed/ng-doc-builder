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

function draggable(el, o) {
    el.setAttribute('draggable', true);
    var events = ['drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'dragstart', 'drop'];
    events.forEach(en => { on(el, en, function (e) { if (o[en]) o[en](e) }); });
}

function droppable(el, o) {
    var events = ['drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'dragstart', 'drop'];
    events.forEach(en => { on(el, en, function (e) { if (o[en]) o[en](e) }); });
}