import { useContext } from "react";
import Transaction from "../models/transaction";
import { RpcContext } from "../contexts/rpcContext";


export const TransactionForm = () => {
    const {rpc} = useContext(RpcContext)
    async function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target.to.value);
        const tx = new Transaction(
            e.target.from.value,
            e.target.to.value,
            e.target.amount.value
        )
        const confirmation = await tx.send(rpc)
        alert("Transaction: " + confirmation);
    };

    return(
        <div>
            <h1>Add Transaction</h1>
            <form onSubmit={handleSubmit} id="txForm">
                <label for='from'>Sender</label>
                <input id="from"></input>
                <label for='to'>Receiver</label>
                <input id="to"></input>
                <label for='amount'>Amount</label>
                <input id="amount"></input>
                <button type="submit">Submit Transaction</button>
            </form>       
        </div>
    )
}