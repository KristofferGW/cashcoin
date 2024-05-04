import { useContext, useEffect, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";
import { RpcContext } from "../contexts/rpcContext";

export const Blocklist = () => {
    const [trs, setTrs] = useState(<></>);
    const {rpc} = useContext(RpcContext);


    async function load_blockchain () {
        if (rpc === null) {
            alert('no rpc found');
            return;
        }
        let data;
        // fetch blocks endpoint
        try {
            data = await(await fetch(`${rpc}/${BLOCKS_ENDPOINT}`)).json();
        }
        catch(e) {
            alert('Cannot connect to CashChain!');
        }
        
        // build block tr's
        const block_trs = buildTrs(data);
        setTrs(block_trs);
        
    }

    function buildTrs (blocks) {
        let elements = []
        for(let block of blocks) {
            elements.push(
                <tr>
                    <td>{block.index}</td>
                    <td>{block.timestamp}</td>
                    <td>{block.hash}</td>
                </tr>
            )
        }
        return elements
    }

    // load blocks on load
    useEffect(() => {
        if(rpc !== null) {
            load_blockchain();
        }
    }, [rpc]);

    useEffect(() => {} , [trs])
    return(
        <div>
            <h1>Blocklist</h1>
            <table id="blocklist_table">
                <tr>
                    <th>Index</th>
                    <th>Timestamp</th>
                    <th>Hash</th>
                </tr>
                {trs}
            </table>
        </div>
    );
};