import { useContext, useState } from "react";
import { RpcContext } from "../contexts/rpcContext";

export const AddBlock = () => {
    const {rpc} = useContext(RpcContext);

    async function handleAddBlock() {
        if (!rpc) {
            alert('No RPC connected!');
            return;
        }

        try {
            const response = await fetch(`${rpc}/addBlock`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                alert('Block added successfully');
            } else {
                alert('Failed to add block!');
            }
        } catch (error) {
            console.error('Error adding block:', error);
            alert('Error adding block!');
        }
    }

    return(
        <div>
            <h1>Add Block</h1>
            <button onClick={handleAddBlock}>Add Block</button>
        </div>
    )
}