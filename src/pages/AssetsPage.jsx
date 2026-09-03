import { Link } from 'react-router-dom';
import { watchlist } from '../data/market';

export default function AssetsPage() {
  return (
    <main className="assets-page">
      <Link className="back-link" to="/">
        ← Back to dashboard
      </Link>

      <p className="label">Markets</p>
      <h1>All assets</h1>

      <section className="panel assets-list">
        {watchlist.map((asset) => (
          <article className="asset" key={asset.symbol}>
            <div className="asset-name">
              <b>{asset.symbol}</b>
              <small>{asset.name}</small>
            </div>

            <div className="asset-value">
              <b>${asset.price}</b>
              <small className={asset.positive ? 'up' : 'down'}>
                {asset.change}
              </small>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}