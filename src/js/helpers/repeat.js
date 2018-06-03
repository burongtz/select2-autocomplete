/**
 * Repeat
 * @param integer size 
 * @param function cb - callback
 */
const repeat = function(size = 0, cb = null) {
    for (let index = 0; index < size; index++) {
        if (cb(index) === false) {
            break;
        }
    }
};

export default repeat;