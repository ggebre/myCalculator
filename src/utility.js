class Operation {
    static  add = function (a) {
        return function (b) {
            return a + b
        }
    } 
    static subtract = function (a) {
        return function (b) {
            return a - b
        }
    } 
    static multiply = function (a) {
        return function (b) {
            return a * b
        }
    } 
    static division = function(a) {
        return function (b) {
            return b !== 0 ? (a/(1.0*b)) : null
        }
    } 
    static percentage = function (a) {
        return a / 100
    } 
    static plusMinus = function(a) {
        return -1 * a 
    }
}

export default Operation