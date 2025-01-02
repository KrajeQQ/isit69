(function(global) {
    "use strict";

    // Encapsulation layer
    const NumberAnalyzer = (function() {
        // Core logic: Check if the number is 69
        const coreLogic = (input) => input === 69;

        return {
            analyzeNumber: (num) => {
                // Validate the input type
                if (typeof num !== 'number' || isNaN(num)) {
                    return false;
                }
                return coreLogic(num);
            }
        };
    })();

    // Attach to global context
    if (typeof module !== "undefined" && module.exports) {
        module.exports = NumberAnalyzer;
    } else {
        global.NumberAnalyzer = NumberAnalyzer;
    }
})(this);
