import axios from "axios";
import { SUBMIT_TX_ENDPOINT } from "../Constants";

export default class Transaction {
    constructor(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.timestamp = Date.now();
    }
    async send (rpc) {
        try {
            console.log(await axios.post(`${rpc}/${SUBMIT_TX_ENDPOINT}`, {from:this.from, to:this.to, amount:this.amount}));
            return 'confirmed'
        }
        catch(e) {
            console.error(e);
            return 'failed'
        }
    }
}