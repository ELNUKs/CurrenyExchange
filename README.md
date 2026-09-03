# Market Pulse Dashboard

A responsive cryptocurrency portfolio dashboard built with React and Vite. It includes a market watchlist, balance chart, asset allocation, activity table, and an Assets page.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Vite will show a local address, normally `http://localhost:5173`. Open it in a browser.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build in dist/
npm run preview  # Preview the production build locally
```

## Project structure

```text
src/
├── components/       Reusable dashboard UI components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── BalanceCard.jsx
│   ├── Watchlist.jsx
│   ├── Allocation.jsx
│   └── ActivityTable.jsx
├── data/             Sample market and activity data
├── pages/            Full-page views, such as AssetsPage.jsx
├── App.jsx           Application layout and routes
├── main.jsx          React entry point
└── styles.css        Dashboard styling and responsive rules
```

## Features

- Dark, responsive trading-terminal layout
- Date-range selector for 7, 30, and 90-day balance views
- Watchlist for BTC, ETH, SOL, and other assets
- Reusable React components for each dashboard section
- Asset allocation and recent activity panels
- Optional live crypto-price fetching through the CoinGecko API
- Assets page accessed through the **View all** link

## Updating the greeting

Edit `src/components/Header.jsx`:

```jsx
<h1>Good morning, Elnukss</h1>
```

## Notes on live prices

The dashboard can fetch public price data from CoinGecko in the browser. For a real-money product, deposits and payments must be implemented with a secure server and a vetted payment or exchange provider—never only in browser-side React code.