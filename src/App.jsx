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
import { CardComponent } from "./Components/CardComponent";

function App() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">
        {/* Your existing ConnectionProvider and other components go here */}
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
              <CardComponent>
                <AirdropSol />
              </CardComponent>
              <CardComponent>
                <SendToken />
              </CardComponent>

              {/* <SignMsg/> */}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
}

export default App;


