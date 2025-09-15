import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";


export function SendToken(){

    const wallet = useWallet();
    const {connection} = useConnection();


    async function transferSol(){
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;

        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(to),
            lamports : amount*LAMPORTS_PER_SOL
        }))

        const reponse = await wallet.sendTransaction(transaction,connection);
        console.log(reponse);
    }

    return <div className="flex flex-col justify-center items-center -my-62 gap-4 text-white">
        <input type="text" name="" placeholder="to" id="to" className="px-2 border-none rounded-md shadow-lg bg-white text-black"/>
        <input type="text" name="" id="amount" placeholder="amount" className="px-2 border-none rounded-md shadow-lg bg-white text-black"/>
        <button onClick={transferSol} className="bg-indigo-500 shadow-lg rounded-md w-26 h-8">Send</button>
    </div>
}