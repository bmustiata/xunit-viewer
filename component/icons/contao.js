import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M138 128h197q-70 64-126 149-36 56-59 115t-30 125.5-8.5 120 10.5 132 21 126 28 136.5q4 19 6 28 51 238 81 329 57 171 152 275h-272q-48 0-82-34t-34-82v-1304q0-48 34-82t82-34zm1208 0h308q48 0 82 34t34 82v1304q0 48-34 82t-82 34h-178q212-210 196-565l-469 101q-2 45-12 82t-31 72-59.5 59.5-93.5 36.5q-123 26-199-40-32-27-53-61t-51.5-129-64.5-258q-35-163-45.5-263t-5.5-139 23-77q20-41 62.5-73t102.5-45q45-12 83.5-6.5t67 17 54 35 43 48 34.5 56.5l468-100q-68-175-180-287z' }));;
}