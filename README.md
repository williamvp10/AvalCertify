# 🏗 AvalCertify - Avalanche Hackathon

**Emisión y Validación de Certificados en Blockchain**


🧪 Desarrollamos un sistema en la blockchain de Avalanche usando ERC721 para emitir certificados educativos como NFTs. Esto asegura la autenticidad, integridad y privacidad de los certificados, resolviendo problemas de falsificación y métodos de verificación lentos y costosos. El sistema permite a las instituciones emitir certificados, a los estudiantes recibirlos y a los validadores verificar su autenticidad de manera segura y eficiente.

## Smart Contract

Nuestro contrato inteligente está desplegado en la red Fuji. Puedes verlo en la siguiente dirección: [0x7CCf2D7f48a485A8a66aeb6FFC0A4a71Ab20EB00](https://subnets-test.avax.network/c-chain/address/0x7CCf2D7f48a485A8a66aeb6FFC0A4a71Ab20EB00)

## Miembros del Equipo

Nuestro proyecto es traído a ti por los siguientes miembros del equipo:

- Jacqueline Parada Parada - Product Owner
- Erika Monroy - Product Owner - Diseñadora UX/UI
- Daniel Vasquez - Desarrollador Backend
- William Vasquez - Desarrollador Frontend

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
