import { useContext, useState } from "react";
import Transaction from "../models/transaction";
import { RpcContext } from "../contexts/rpcContext";

export const TransactionForm = () => {
    const { rpc } = useContext(RpcContext);

    // Initialize state for each input field
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        // Validate input fields
        if (from.length < 3 || to.length < 3) {
            alert("Sender and receiver names must be at least 3 characters long.");
            return;
        }
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            alert("Amount must be a positive number.");
            return;
        }

        const tx = new Transaction(from, to, amount);
        const confirmation = await tx.send(rpc);
        alert("Transaction: " + confirmation);

        // Clear the input fields after submitting
        setFrom("");
        setTo("");
        setAmount("");
    };

    return (
        <div>
            <h1>Add Transaction</h1>
            <form onSubmit={handleSubmit} id="txForm">
                <label htmlFor='from'>Sender</label>
                <input id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
                <label htmlFor='to'>Receiver</label>
                <input id="to" value={to} onChange={(e) => setTo(e.target.value)} />
                <label htmlFor='amount'>Amount</label>
                <input id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button type="submit">Submit Transaction</button>
            </form>
        </div>
    );
}

