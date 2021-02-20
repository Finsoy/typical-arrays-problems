exports.min = function min(array) {
    let minValue = 0;
    if (array) {
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        }
        return minValue;
    } else return 0;
};

exports.max = function max(array) {
    let maxValue = 0;
    if (array) {
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }
        return maxValue;
    } else return 0;
};

exports.avg = function avg(array) {
    let sum = 0;
    let result
    if (array) {
        for (let i = 0; i <= array.length - 1; i++) {
            sum += array[i];
        }
        result = sum / array.length;
        if(isNaN(result)){
            return 0
        } else return result
    } else {
        return 0;
    }
};
