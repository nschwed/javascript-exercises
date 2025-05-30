word = ""; // Default value for word
repeats = ""

const repeatString = function(word, repeats) {
    if (typeof word !== 'string' || typeof repeats !== 'number' || repeats < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < repeats; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
