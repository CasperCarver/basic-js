module.exports = class DepthCalculator {
    calculateDepth( arr,deep = 1 ) {
        let deepSec = deep;
        let maxDeep = 1;
        for(let i=0; i< arr.length; i++) {
            if (Array.isArray(arr[i])) {
                deepSec = this.calculateDepth(arr[i], deep+1);
                if (deepSec > maxDeep) {
                    maxDeep = deepSec;
                }
            }
        }
        if (deepSec > maxDeep){
             maxDeep = deepSec;
        }
        return maxDeep;
    }
};