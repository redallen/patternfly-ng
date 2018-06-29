import { Injectable } from '@angular/core';
function _window() {
    // return the global native browser window object
    return window;
}
var WindowReference = /** @class */ (function () {
    function WindowReference() {
    }
    Object.defineProperty(WindowReference.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowReference.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WindowReference.ctorParameters = function () { return []; };
    return WindowReference;
}());
export { WindowReference };
//# sourceMappingURL=window.reference.js.map