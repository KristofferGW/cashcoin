import { useContext, useEffect, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";
import { RpcContext } from "../contexts/rpcContext";
import axios from "axios";

export const Blocklist = () => {
    const [trs, setTrs] = useState(<></>);
    const {rpc} = useContext(RpcContext);


    async function load_blockchain () {
        if (rpc === null) {
            return;
        }
        let data;
        // fetch blocks endpoint
        try {
            data = (await axios.get(`${rpc}/${BLOCKS_ENDPOINT}`)).data.data;
            console.log(data);
        }
        catch(e) {
            alert('Cannot connect to CashChain!');
        }
        
        // build block tr's
        const block_trs = buildTrs(data);
        setTrs(block_trs);
        
    }

    function buildTrs(blocks) {
        return blocks.map((block, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{block.nonce}</td>
                <td>{block.timestamp}</td>
                <td>{block.hash}</td>
            </tr>
        ));
    }
    // load blocks on load
    useEffect(() => {
        if(rpc !== null) {
            load_blockchain();
        }
    }, [rpc]);

    // load blocks periodically
    useEffect(() => {
        const interval = setInterval(load_blockchain, 5000);
        return () => clearInterval(interval);
    });

    useEffect(() => {} , [trs])
    return(
        <div>
            <h1>Blocklist</h1>
            <table id="blocklist_table">
                <tr>
                    <th>Index</th>
                    <th>Nonce</th>
                    <th>Timestamp</th>
                    <th>Hash</th>
                </tr>
                {trs}
            </table>
        </div>
    );
};