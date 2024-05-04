import { useEffect, useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";

export const Blocklist = () => {
    const [trs, setTrs] = useState(<></>);

    async function load_blockchain () {
        // fetch blocks endpoint
        // const data = await(await fetch(BLOCKS_ENDPOINT)).json();

        // MOCK DATA
        const data = [
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn'},
        ]
        
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
        console.log('skibidi frontend');
        load_blockchain();
    }, []);

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