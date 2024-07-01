import { Container } from "react-dom";
import { Conteiner } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export function Dashboard(){
    return (
        <Conteiner>
            <Summary />
            <TransactionTable />
        </Conteiner>


    );
}