import { createContext, ReactNode, useContext } from "react";
import { CounterService } from "../../application/services/counter.service";
import { CounterRepositoryImpl } from "../../infrastructure/adapters/counter.impl";

interface Services {
    counterService: CounterService;
}

const ServiceContext = createContext<Services | null>(null);

interface ServiceProviderProps {
    children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
    const counterService = new CounterService(new CounterRepositoryImpl());

    const services = {
        counterService
    };

    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
};

export const useServices = () => {
    const context = useContext(ServiceContext);
    if(!context) {
        throw new Error("useServices must be used within a ServiceProvider");
    }
    return context;
}