import Icon from './Icon';

export default function Header() {
  return (
    <header className="header" id="top">
      <div>
        <p className="eyebrow">Wednesday, 15 July</p>
        <h1>Good morning, Elnukss</h1>
      </div>

      <div className="header-actions">
        <label className="search">
          <Icon name="search" size={16} />
          <input placeholder="Search assets" />
        </label>

        <button className="icon-button" aria-label="Notifications">
          <Icon name="bell" />
        </button>

        <button
  className="primary-button"
  onClick={() => alert('Deposit flow coming soon!')}
>
  Deposit funds
</button>
      </div>
    </header>
  );
}