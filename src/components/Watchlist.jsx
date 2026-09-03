import { useEffect, useState } from 'react';
import Sparkline from './Sparkline';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const initialAssets = [
  { id: 'bitcoin', symbol: 'BTC/USD', name: 'Bitcoin', price: 'Loading...', change: '—', positive: true },
  { id: 'ethereum', symbol: 'ETH/USD', name: 'Ethereum', price: 'Loading...', change: '—', positive: true },
  { id: 'solana', symbol: 'SOL/USD', name: 'Solana', price: 'Loading...', change: '—', positive: true },
];

export default function Watchlist() {
  const [assets, setAssets] = useState(initialAssets);

  useEffect(() => {
    async function getPrices() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true'
      );

      const prices = await response.json();

      setAssets((currentAssets) =>
        currentAssets.map((asset) => {
          const coin = prices[asset.id];
          const change = coin.usd_24h_change ?? 0;

          return {
            ...asset,
            price: coin.usd.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
            positive: change >= 0,
          };
        })
      );
    }

    getPrices();

    const timer = setInterval(getPrices, 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="panel watchlist" id="markets">
      <div className="section-title">
        <div>
          <p className="label">Markets</p>
          <h2>Watchlist</h2>
        </div>

        <Link className="text-button" to="/assets">
  View all <Icon name="arrow" size={14} />
</Link> </div>

      <div className="asset-list">
        {assets.map((asset, index) => (
          <article className="asset" key={asset.id}>
            <div className={`coin coin-${index}`}>
              {asset.symbol.slice(0, 1)}
            </div>

            <div className="asset-name">
              <b>{asset.symbol}</b>
              <small>{asset.name}</small>
            </div>

            <Sparkline positive={asset.positive} />

            <div className="asset-value">
              <b>${asset.price}</b>
              <small className={asset.positive ? 'up' : 'down'}>
                {asset.change}
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}