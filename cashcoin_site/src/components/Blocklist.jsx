import { useContext, useEffect, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";
import { RpcContext } from "../contexts/rpcContext";
import axios from "axios";

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

    function buildTrs (blocks) {
        let elements = []
        for(let block of blocks) {
            const data = block;
            elements.push(
                <tr>
                    <td>{data.nonce}</td>
                    <td>{data.timestamp}</td>
                    <td>{data.hash}</td>
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
                    <th>Timestamp</th>
                    <th>Hash</th>
                </tr>
                {trs}
            </table>
        </div>
    );
};