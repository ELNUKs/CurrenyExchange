import { useState } from 'react';

const rangeData = {
  '7d': {
    label: 'Last 7 days',
    balance: '$128,940.16',
    change: '+3.52%',
    bars: [38, 45, 42, 55, 48, 63, 58, 72, 65, 79, 84, 77, 91, 98],
    dates: ['09 Jul', '11 Jul', '13 Jul', '15 Jul'],
  },
  '30d': {
    label: 'Last 30 days',
    balance: '$124,562.48',
    change: '+8.24%',
    bars: [25, 38, 31, 48, 42, 59, 45, 76, 64, 83, 61, 96, 72, 82, 69, 89, 78, 101, 87, 112, 92, 106, 95, 125, 103, 116, 108, 139, 119, 154, 132, 165],
    dates: ['15 Jun', '22 Jun', '29 Jun', '06 Jul', '13 Jul'],
  },
  '90d': {
    label: 'Last 90 days',
    balance: '$116,304.72',
    change: '+14.86%',
    bars: [22, 27, 25, 32, 29, 35, 31, 42, 38, 44, 41, 48, 45, 52, 49, 58, 54, 64, 61, 70, 67, 77, 73, 82, 79, 90, 85, 98, 94, 108, 102, 117],
    dates: ['16 Apr', '01 May', '16 May', '31 May', '15 Jun'],
  },
};

export default function BalanceCard() {
  const [range, setRange] = useState('30d');
  const selected = rangeData[range];

  return (
    <section className="panel balance-card">
      <div className="card-heading">
        <div>
          <p className="label">Total balance</p>

          <h2>
            {selected.balance.split('.')[0]}
            <span>.{selected.balance.split('.')[1]}</span>
          </h2>

          <p className="gain">
            ↗ {selected.change} <em>vs. previous period</em>
          </p>
        </div>

        <select
          aria-label="Date range"
          value={range}
          onChange={(event) => setRange(event.target.value)}
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="chart">
        <div className="chart-grid" />

        <div className="bars">
          {selected.bars.map((height, index) => (
            <i
              key={index}
              style={{ height }}
              className={index > selected.bars.length - 7 ? 'bright' : ''}
            />
          ))}
        </div>

        <div className="axis">
          {selected.dates.map((date) => (
            <span key={date}>{date}</span>
          ))}
        </div>
      </div>
    </section>
  );
}