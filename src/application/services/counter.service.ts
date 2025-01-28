import { CounterRepository } from "../../domain/repositories/counter.repository";

export class CounterService {
    constructor(private counterRepository: CounterRepository) {}

    increment(): void {
        const currentValue = this.counterRepository.load();
        this.counterRepository.save(currentValue + 1);
    }

    decrement(): void {
        const currentValue = this.counterRepository.load();
        this.counterRepository.save(currentValue - 1);
    }

    getCounterValue(): number {
        return this.counterRepository.load();
    }
}