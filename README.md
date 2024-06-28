# Smart-Contract-Management---ETH-AVAX-2

```markdown
# Smart Contract Management Project: Function Frontend

## Overview

This project demonstrates the integration of Ethereum smart contracts with a React frontend to manage and display academic records on the blockchain. The project includes a simple smart contract `AcademicRecords` written in Solidity and a React application that interacts with the contract.

## Features

- **Smart Contract (`AcademicRecords.sol`)**:
  - Manages academic records with functions to register learners and fetch their information.
  - Stores learner data such as name, grade, pass status, and subject.

- **Frontend Application (`React`)**:
  - Allows users to register new learners with their academic details.
  - Fetches and displays registered learner information from the blockchain.

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js
- Truffle Framework
- Ganache (or Ganache CLI)
- MetaMask browser extension

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/smart-contract-management.git
   cd smart-contract-management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start Ganache:**

   Start Ganache and ensure it is running on `http://localhost:8545` or update `truffle-config.js` if using a different port.

4. **Compile and migrate the smart contract:**

   ```bash
   truffle migrate --reset
   ```

5. **Copy contract artifacts:**

   Copy `AcademicRecords.json` from `build/contracts` to `src/contracts` in your React project directory.

6. **Start the React application:**

   ```bash
   npm start
   ```

7. **Connect MetaMask:**

   - Connect MetaMask to the local blockchain (Ganache) network (`Custom RPC` with URL `http://localhost:8545`).

8. **Interact with the application:**

   - Use the provided UI to register learners and fetch their details.

## Folder Structure

```
smart-contract-management/
│
├── build/                    # Truffle build artifacts
├── contracts/                # Solidity smart contracts
│   └── AcademicRecords.sol
├── src/                      # React frontend source code
│   ├── components/
│   ├── contracts/            # Copied AcademicRecords.json from build/contracts
│   ├── App.js
│   ├── index.js
│   └── ...
├── truffle-config.js         # Truffle configuration file
└── README.md                 # This file
```

## Notes

- Ensure MetaMask is unlocked and connected to the local Ganache network to interact with the smart contract.
- Modify the `truffle-config.js` and React components as necessary for your specific setup.

## Contributors

- Akash (https://github.com/SUPREME-AKASH-DEVELOPER)

## License

This project is licensed under the MIT License - 

https://www.loom.com/share/b9952ced44bb4bb5b2c9e451f5ecd1bf?sid=46a682b1-4d72-4b58-9a88-b6285bd87f1c

## Pictures
![image](https://github.com/SUPREME-AKASH-DEVELOPER/Smart-Contract-Management---ETH-AVAX-2/assets/142366831/cf04c467-fa5e-4606-9b65-59dcd991e264)
![image](https://github.com/SUPREME-AKASH-DEVELOPER/Smart-Contract-Management---ETH-AVAX-2/assets/142366831/6271dc46-e2a1-4050-8e57-366e0e6c9924)

