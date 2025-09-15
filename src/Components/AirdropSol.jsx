import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


 export function AirdropSol (){

    const wallet = useWallet();
    const {connection} = useConnection();

    async function requestAirdrop(){
        let amount = document.getElementById("inp").value;
        await connection.requestAirdrop(wallet.publicKey, amount*LAMPORTS_PER_SOL);
        alert(`Airdropped ${amount} SOL`);
    }

    return <div className="flex flex-col justify-center items-center min-h-screen -my-32 gap-4 text-white">
        <input type="text" name="" placeholder="amount" id="inp" className="px-2 border-none rounded-md shadow-lg bg-white text-black"/>
        <button className="bg-indigo-500 shadow-lg rounded-md w-26 h-8" onClick={requestAirdrop}>Airdrop Sol</button>
    </div>
 }