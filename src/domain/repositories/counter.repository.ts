export interface CounterRepository {
    save(value: number): void
    load(): number
}