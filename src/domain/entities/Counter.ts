export class Counter {
    private value: number;

    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }

    reset() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }
}