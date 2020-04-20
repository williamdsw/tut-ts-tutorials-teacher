
interface KeyValueProcessor {
    (key: number, value: string): void;
}

function add(key: number, value: string): void {
    console.log ('key:', key, 'value:', value);
}

function update(key: number, value: string): void {
    console.log('key:', key, 'value:', value);
}