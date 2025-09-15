import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

 

 export function ShowBalance(){

    const [balance,setbalance ] = useState(null);
    const wallet = useWallet();

    const {connection} = useConnection();

    async function getBalance(){
        const SolBalance = await connection.getBalance(wallet.publicKey);
        setbalance(SolBalance/LAMPORTS_PER_SOL)
        // document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }

    useEffect(()=>{
        getBalance();
    },[wallet]);

    return <div>
        <span className="text-lime-100">{balance} SOL</span>
    </div>
 }