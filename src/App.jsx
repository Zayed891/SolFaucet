import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { AirdropSol } from "./Components/AirdropSol";
import { ShowBalance } from "./Components/ShowBalance";
import { SendToken } from "./Components/SendToken";
import { SignMsg } from "./Components/SignMsg";

function App() {
  return (
    <div className="min-h-screen bg-slate-800  gap-8">
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/ygkzd7eGMklUESmfTZ42m-dfQeDuvagd"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="flex flex-row justify-end gap-4 p-4">
              <WalletMultiButton />
              <ShowBalance />
            </div>

            {/* Your app's components go here, nested within the context providers. */}
            <AirdropSol />
            <SendToken/>
            {/* <SignMsg/> */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
