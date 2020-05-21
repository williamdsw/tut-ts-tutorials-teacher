var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.display = function () {
        console.log("Key: " + this.key + " | Value: " + this.value);
    };
    return KeyValuePair;
}());
