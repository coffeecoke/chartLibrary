var _unique = function(arr) {
    if (!arr) {
        return false;
    }
    var result = [],
        hash = {},
        firstItem = arr[0]
    if (firstItem instanceof Object) {
        for (var i = 0; i < arr.length; i++) {
            if (!hash[arr[i].name]) {
                result.push(arr[i])
                hash[arr[i].name] = true
            }
        }
        return result;
    } else {
        for (var i = 0, elem;
            (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result
    }
}
var _deepClone = function(obj) { // 深克隆
    if (typeof obj === 'function') { // 函数
        return new Function('return ' + obj.toString())()
    }
    if (typeof obj !== 'object') { // 基本类型
        return obj
    }
    // 对象，数组
    var value, target = {}
    if (Object.prototype.toString.call(obj) === '[object Array]') { // 数组
        target = []
    }
    for (var name in obj) {
        value = obj[name]
        if (value === obj) { // 避免死循环
            continue;
        }
        if (typeof obj[name] === 'function' || typeof obj[name] === 'object') { // 函数或者对象/数组则递归复制
            target[name] = util._deepClone(obj[name])
        } else {
            target[name] = obj[name]
        }
    }
    return target

}

export default {
    _unique: _unique,
    _deepClone: _deepClone
}