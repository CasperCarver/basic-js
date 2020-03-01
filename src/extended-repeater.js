module.exports = function repeater( str, options ) {
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '+';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    }
    
    let newStr = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        let string=str;
        for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
            if (options.addition != undefined || options.addition === null)
                string += options.addition + options.additionSeparator;
        }
        if (options.addition != undefined || options.addition === null)
            string += options.addition;
        if (i === options.repeatTimes - 1) newStr += string;
        else newStr += string + options.separator;
    }

    return newStr;
};
  