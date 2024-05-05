import { useContext } from "react"
import { RpcContext } from "../contexts/rpcContext"

export const RpcInput = () => {

    const {setRpc} = useContext(RpcContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setRpc(e.target.rpc.value);
    }

    return (
        <div>
            <h1>RPC INPUT</h1>
            <form onSubmit={handleSubmit}>
                <input id="rpc" placeholder="Blockchain Node URL"></input>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};