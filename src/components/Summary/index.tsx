import React, { useContext } from 'react';
import { Container } from "./styles";
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import imgTotal from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';


export function Summary() {

    const { transactions } = useContext(TransactionsContext);

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0 );

    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={imgIncome} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={imgOutcome} alt="Saídas" />
                </header>
                <strong>
                    -
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}