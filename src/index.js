module.exports = function check(str, bracketsConfig) {
    let stack = str.split('').reduce((acc, bracket) => {
        let stackLength = acc.length;
        if (stackLength === 0) {
            acc.push(bracket);
        } else {
            let findPair = bracketsConfig.find(value => {
                if (value[1] === bracket) {
                    return true;
                }
            });
            if (findPair === undefined) {
                acc.push(bracket);
                return acc;
            }
            if (acc[stackLength - 1] === findPair[0]) {
                acc.pop();
            } else {
                acc.push(bracket);
            }
        }
        return acc;
    }, []);
    return !stack.length;
}