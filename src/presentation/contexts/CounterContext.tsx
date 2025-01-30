import { createContext, ReactNode, useContext } from "react";
import { CounterService } from "../../application/services/counter.service";
import { CounterRepository } from "../../domain/repositories/counter.repository";
import { CounterRepositoryImpl } from "../../infrastructure/adapters/counter.impl";

const CounterContext = createContext<CounterService | null>(null);

interface ProviderProps {
    children: ReactNode;
}

export const CounterProvider: React.FC<ProviderProps> = ({ children }) => {
    const counterRepository: CounterRepository = new CounterRepositoryImpl();
    const counterService = new CounterService(counterRepository);

    return (
        <CounterContext.Provider value={counterService}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    const context = useContext(CounterContext);

    if(!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
}