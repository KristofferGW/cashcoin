import { useContext, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";
import { RpcContext } from "../contexts/rpcContext";

export const Search = () => {
    const [res, setRes] = useState(null);
    const {rpc} = useContext(RpcContext);

    async function handleSearch (e) {
        if(!rpc) {
            alert('no rpc connected!')
            return
        }

        console.log('finding block');
        e.preventDefault();
        const query = e.target.hash.value;
        // fetch blocks endpoint
        // const data = await(await fetch(BLOCKS_ENDPOINT)).json();
        let blocks;
        try {
            blocks = (await(await fetch(`${rpc}/${BLOCKS_ENDPOINT}`)).json()).data;
        }
        catch(e) {
            alert('Cannot connect to CashChain!')
        }
        console.log(query);
        console.log(blocks);
        let block;
        block = (blocks.find(e => e.hash === query));
        console.log(block);
        
        if(!block) {return null};

        const data = block.data;
        const result = (
            <div id="result">
                <div className="inline">
                    <p>Index</p>
                    <p>{block.index}</p>
                </div>
                <div className="inline">
                    <p>TimeStamp</p>
                    <p>{new Date(block.timestamp).toUTCString()}</p>
                </div>
                <div className="inline">
                    <p>Previoush Hash</p>
                    <p>{block.previousHash}</p>
                </div>
                <div className="inline">
                    <p>Hash</p>
                    <p>{block.hash}</p>
                </div>
                {
                    data.length > 0 ?
                    <div className="inline">
                        <p>Data</p>
                        <p>{`[${new Date(data.timestamp).toUTCString()}] - Transaction from ${data.from} to ${data.to} for ${data.amount} Cashcoin`}</p>
                    </div>
                    :
                    <p>No Data</p>
                }
            </div>
        )

        setRes(result)

    }

    return(
        <div>
            <h1>Search</h1>
            <form  onSubmit={handleSearch} id="searchField">
                <input id="hash" placeholder="search block by hash"/>
                <button type="submit">Search</button>
            </form>
            {res}
        </div>
    )
}