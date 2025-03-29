# Next.js + SST Project

This project is built using Next.js and SST (Serverless Stack) for AWS deployment.

## Prerequisites

- Node.js (v16 or later)
- AWS CLI configured with appropriate credentials
- Yarn (optional, but recommended)

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up your environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration values.

## Development

To run the development server:

```bash
# Start SST in development mode
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy to AWS:

```bash
npm run deploy
# or
yarn deploy
```

