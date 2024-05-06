import { useContext, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";
import { RpcContext } from "../contexts/rpcContext";

export const Search = () => {
    const [res, setRes] = useState(null);
    const [query, setQuery] = useState(""); // State for the input value
    const { rpc } = useContext(RpcContext);

    async function handleSearch(e) {
        e.preventDefault();
        if (!rpc) {
            alert('No RPC connected!');
            return;
        }

        console.log('Finding block');
        let blocks;
        try {
            blocks = (await (await fetch(`${rpc}/${BLOCKS_ENDPOINT}`)).json()).data;
        } catch (e) {
            alert('Cannot connect to CashChain!');
            setQuery(""); // Clear the input on error as well
            return;
        }
        console.log(query);
        console.log(blocks);
        const block = blocks.find(block => block.hash === query);
        console.log(block);

        if (!block) {
            setRes(<p>Block not found.</p>);
            setQuery(""); // Clear the input when not found
            return;
        }

        const result = (
            <div id="result">
                <div className="inline">
                    <p>TimeStamp</p>
                    <p>{new Date(block.timestamp).toUTCString()}</p>
                </div>
                <div className="inline">
                    <p>Nonce</p>
                    <p>{block.nonce}</p>
                </div>
                <div className="inline">
                    <p>Previous Hash</p>
                    <p>{block.previousHash}</p>
                </div>
                <div className="inline">
                    <p>Hash</p>
                    <p>{block.hash}</p>
                </div>
                {block.data && block.data.length > 0 ? (
                    block.data.map((transaction, index) => (
                        <div className="inline" key={index}>
                            <p>Transaction {index + 1}</p>
                            <p>{`${new Date(transaction.timestamp).toUTCString()} - From ${transaction.from} to ${transaction.to} for ${transaction.amount} Cashcoin`}</p>
                        </div>
                    ))
                ) : (
                    <p>No Data</p>
                )}
            </div>
        );

        setRes(result);
        setQuery(""); // Clear the input after setting the result
    }

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch} id="searchField">
                <input 
                    id="hash" 
                    placeholder="Search block by hash"
                    value={query} // Bind input value to state
                    onChange={(e) => setQuery(e.target.value)} // Update state on change
                />
                <button type="submit">Search</button>
            </form>
            {res}
        </div>
    );
};
