# 🚀 Propulsion - Web3 Fullstack Starter

A modern, production-ready Web3 development starter template featuring Next.js frontend and Hardhat for smart contract development. Built with the latest Web3 technologies and best practices.

## ✨ Features

- 🌐 **Next.js Frontend**
  - Modern React with TypeScript
  - Tailwind CSS for styling
  - Web3Modal v4 integration
  - Wagmi v2 for Web3 interactions
  - Type-safe contract interactions
  - Responsive design

- ⛓️ **Blockchain Development**
  - Hardhat development environment
  - TypeScript support
  - Automated testing setup
  - Local network deployment
  - Sepolia testnet support
  - Contract verification tools

- 🔧 **Developer Experience**
  - Full TypeScript support
  - ESLint configuration
  - Automated linting
  - Hot reloading
  - Concurrent development servers

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Web3Modal
  - Wagmi v2
  - React Query

- **Blockchain**
  - Hardhat
  - TypeScript
  - Ethers.js
  - Hardhat-deploy
  - Mocha/Chai testing

## 📦 Project Structure

```
propulsion/
├── frontend/               # Next.js frontend application
│   ├── app/               # App router pages and components
│   ├── components/        # Reusable React components
│   ├── context/          # React context providers
│   ├── config/           # Configuration files
│   └── public/           # Static assets
│
├── blockchain/            # Hardhat project
│   ├── contracts/        # Smart contracts
│   ├── scripts/          # Deployment scripts
│   └── test/            # Contract tests
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MetaMask or any Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/propulsion.git
cd propulsion
```

2. Install dependencies:
```bash
npm run install:all
```

3. Set up environment variables:
```bash
# Frontend (.env.local)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# Blockchain (.env)
PRIVATE_KEY=your_private_key
ETHERSCAN_API_KEY=your_etherscan_key
```

### Development

1. Start the local blockchain:
```bash
npm run blockchain:node
```

2. Deploy contracts (in a new terminal):
```bash
npm run blockchain:deploy
```

3. Start the frontend (in a new terminal):
```bash
npm run frontend:dev
```

Visit `http://localhost:3000` to see your application.

## 📝 Available Scripts

### Root Directory
- `npm run install:all` - Install all dependencies
- `npm run dev` - Start both frontend and blockchain
- `npm run lint` - Lint all projects
- `npm run lint:fix` - Fix linting issues

### Frontend
- `npm run frontend:dev` - Start development server
- `npm run frontend:build` - Build for production
- `npm run frontend:start` - Start production server
- `npm run frontend:lint` - Lint frontend code
- `npm run frontend:lint:fix` - Fix frontend linting issues

### Blockchain
- `npm run blockchain:node` - Start local blockchain
- `npm run blockchain:compile` - Compile contracts
- `npm run blockchain:deploy` - Deploy to local network
- `npm run blockchain:deploy:sepolia` - Deploy to Sepolia
- `npm run blockchain:test` - Run tests
- `npm run blockchain:coverage` - Run test coverage
- `npm run blockchain:lint` - Lint blockchain code
- `npm run blockchain:lint:fix` - Fix blockchain linting issues

## 🔒 Security

- Never commit your `.env` files
- Always use environment variables for sensitive data
- Regularly update dependencies
- Follow smart contract security best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Hardhat](https://hardhat.org/)
- [WalletConnect](https://walletconnect.com/)
- [Wagmi](https://wagmi.sh/)
