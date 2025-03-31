# Next.js + SST Project

This project is built using Next.js and SST (Serverless Stack) for AWS deployment.

## Prerequisites

- Operating System: Linux, macOS, or Windows with WSL (Windows Subsystem for Linux)
  - This project was tested on Ubuntu 24.04
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
# First time setup: Start Next.js development server
npm run dev
# or
yarn dev

# Then, in a separate terminal, start SST in development mode
npm run sst:dev
# or
yarn sst:dev
```

> **Important**: To avoid infinite loops, always run `npm run dev` or `yarn dev` at least once before running `npm run sst:dev` or `yarn sst:dev`.

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy to AWS:

```bash
npm run deploy
# or
yarn deploy
```

