import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

export function SignMsg() {
  const { publicKey, signMessage } = useWallet();

  async function click() {
    if (!publicKey) throw new Error("Wallet not connected!");
    if (!signMessage)
      throw new Error("Wallet does not support message signing!");

    const msg = document.getElementById("message").ariaValueMax;
    const encodedmsg = new TextEncoder().encode(msg);
    const signature = await signMessage(encodedmsg);

    if(!ed25519.verify(signature,encodedmsg,publicKey.toBase58())) throw new Error('Message signature invalid!');

    console.log(`Message signature : ${bs58.encode(signature)}`);
  }
  return (
    <div className="flex flex-row gap-4 m-8 text-white">
      <input type="text" name="" id="message" placeholder="message" className="px-2 border-none rounded-md shadow-lg bg-white text-black"/>
      <button onClick={click} className="bg-indigo-500 shadow-lg rounded-md w-26 h-8">Sign Message</button>
    </div>
  );
}
