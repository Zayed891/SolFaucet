# SolFaucet - Solana Wallet dApp

A modern decentralized application (dApp) built on Solana blockchain that provides essential wallet operations with a beautiful gradient UI.

## 🌟 Features

- **Wallet Connection**: Connect and disconnect Solana wallets (Phantom, Solflare, etc.)
- **Balance Display**: Real-time SOL balance checking
- **SOL Airdrop**: Request test SOL from Solana devnet faucet
- **Token Transfer**: Send SOL between wallet addresses
- **Modern UI**: Beautiful gradient backgrounds with glass morphism card components

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Blockchain**: Solana Web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Styling**: Tailwind CSS
- **Network**: Solana Devnet (Alchemy RPC)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Zayed891/SolFaucet.git
cd SolFaucet/wallet-adapter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Usage

1. **Connect Wallet**: Click the "Select Wallet" button to connect your Solana wallet
2. **Check Balance**: Your SOL balance will be displayed automatically
3. **Request Airdrop**: Use the airdrop feature to get test SOL (devnet only)
4. **Send SOL**: Enter recipient address and amount to transfer SOL

## 🌐 Supported Wallets

- Phantom
- Solflare
- Backpack
- And other Solana-compatible wallets

## 🎨 UI Components

- **CardComponent**: Reusable card wrapper with gradient borders
- **AirdropSol**: SOL faucet functionality
- **SendToken**: Token transfer interface
- **ShowBalance**: Balance display component
- **SignMsg**: Message signing (coming soon)

## 🔗 Network Configuration

Currently configured for Solana Devnet using Alchemy RPC:
```javascript
endpoint: "https://solana-devnet.g.alchemy.com/v2/your-api-key"
```

## 🚧 Development

### Project Structure
```
src/
├── Components/
│   ├── AirdropSol.jsx
│   ├── SendToken.jsx
│   ├── ShowBalance.jsx
│   ├── SignMsg.jsx
│   └── CardComponent.jsx
├── App.jsx
└── main.jsx
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- [ ] Message signing functionality
- [ ] SPL token support
- [ ] Transaction history
- [ ] Multi-wallet management
- [ ] Mainnet support
- [ ] Mobile responsiveness improvements

## 📞 Contact

Project Link: [https://github.com/Zayed891/SolFaucet](https://github.com/Zayed891/SolFaucet)

---

**Note**: This dApp is currently configured for Solana Devnet. Please ensure you're using a devnet wallet and have devnet SOL for testing.
