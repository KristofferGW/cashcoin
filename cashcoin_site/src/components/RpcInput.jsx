import { useContext, useState } from "react";
import { RpcContext } from "../contexts/rpcContext";

export const RpcInput = () => {
    const { rpc, setRpc } = useContext(RpcContext); // Assume rpc is also provided from context
    const [inputValue, setInputValue] = useState("");  // State to hold the input value

    const handleSubmit = (e) => {
        e.preventDefault();
        setRpc(inputValue);   // Use the state value when submitting
        setInputValue("");    // Clear the input field after submission
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // Update state on input change
    }

    return (
        <div>
            <h1>RPC INPUT</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    id="rpc" 
                    placeholder="Blockchain Node URL"
                    value={inputValue}  // Controlled component
                    onChange={handleInputChange}  // Handle input changes
                />
                <button type="submit">Save</button>
            </form>
            {rpc && <div><strong>Current Blockchain RPC:</strong> {rpc}</div>}
        </div>
    );
};

