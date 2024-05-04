import { useState } from "react";
import { BLOCKS_ENDPOINT } from "../Constants";

export const Search = () => {
    const [res, setRes] = useState(null);


    async function handleSearch (e) {
        console.log('finding block');
        e.preventDefault();
        const query = e.target.hash.value;
        // fetch blocks endpoint
        // const data = await(await fetch(BLOCKS_ENDPOINT)).json();
        console.log(query);
        // MOCK DATA
        const blocks = [
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'a', to:'g', amount:'12', timestamp:Date.now()}},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'b', to:'d', amount:'33', timestamp:Date.now()}},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'c', to:'s', amount:'42', timestamp:Date.now()}},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'d', to:'f', amount:'23', timestamp:Date.now()}},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'e', to:'s', amount:'42', timestamp:Date.now()}},
            {index:1, timestamp:Date.now(), hash:'daljsndkwnakdn',previousHash:'daljsndkwnakdn', data:{from:'f', to:'d', amount:'24', timestamp:Date.now()}},
        ]

        const block = blocks.find(e => e.hash === query);
        
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
                <div className="inline">
                    <p>Data</p>
                    <p>{`[${new Date(data.timestamp).toUTCString()}] - Transaction from ${data.from} to ${data.to} for ${data.amount} Cashcoin`}</p>
                </div>
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