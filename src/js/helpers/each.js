import repeat from './repeat';

/**
 * Get object keys.
 * @param Object obj
 */
function getObjectKeys(obj) {
    var ret = [];
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(key);
        }
    }

    return ret;
}

/**
 * Iterate each element of object.
 * @param {Object} obj
 * @param {function} cb
 */
function each(obj, cb) {
    var keys = getObjectKeys(obj);

    repeat(keys.length, function(index) {
        const key = keys[index];
        const element = obj[key];
        cb(element, key);
    });
}

export default each;