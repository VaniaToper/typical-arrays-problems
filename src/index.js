const validateArray = (array, callback) => {
    if (!array || array.length <= 0) {
        return 0;
    }
    return callback();
};

const min = (array) => {
    return validateArray(array, () => {
        return array.sort((a, b) => a - b)[0];
    });
};

const max = (array) => {
    return validateArray(array, () => {
        return array.sort((a, b) => b - a)[0];
    });
};

const avg = (array) => {
    return validateArray(array, () => {
        const newArr = array.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);
        return newArr / array.length;
    });
};

module.exports = {
    min,
    max,
    avg,
};
