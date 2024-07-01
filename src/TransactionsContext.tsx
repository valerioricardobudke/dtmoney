import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionImput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function creatTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction) 
    }


    return (
        <TransactionsContext.Provider value={transactions}>
            { children }
        </TransactionsContext.Provider>
    )
}
