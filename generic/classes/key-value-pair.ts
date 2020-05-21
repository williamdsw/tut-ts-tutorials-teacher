
class KeyValuePair<T,U> {
    private key: T;
    private value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    public display(): void {
        console.log (`Key: ${this.key} | Value: ${this.value}`);
    }
}