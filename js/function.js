/**
 * 
 * @title --
 * @authors goodliang
 * @date 2015-11-26 19:35:08
 * 
 */

function $(v) {
    if (typeof v === 'function') {
        window.onload = v
    } else if (typeof v === 'string') {
        return document.getElementById(v);
    } else if (typeof v === 'object') {
        return v
    }
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]
}
