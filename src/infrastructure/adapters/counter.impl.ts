import { CounterRepository } from "../../domain/repositories/counter.repository";

export class CounterRepositoryImpl implements CounterRepository {
    private static STORAGE_KEY = "counterValue";

    public save(value: number): void {
        localStorage.setItem(CounterRepositoryImpl.STORAGE_KEY, value.toString())
    }

    public load(): number {
        const value = localStorage.getItem(CounterRepositoryImpl.STORAGE_KEY);
        return value ? parseInt(value, 10) : 0;
    }

}