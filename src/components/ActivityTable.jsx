import { activity } from '../data/market';
import Icon from './Icon';

export default function ActivityTable() {
 return <section className="panel activity"><div className="section-title"><div><p className="label">History</p><h2>Recent activity</h2></div><button className="text-button">View all <Icon name="arrow" size={14}/></button></div><div className="table-wrap"><table><thead><tr><th>Asset</th><th>Side</th><th>Amount</th><th>Value</th><th>Time</th><th /></tr></thead><tbody>{activity.map(([asset, side, amount, value, time]) => <tr key={time}><td><span className="mini-coin">◈</span>{asset}</td><td><span className={'pill ' + side.toLowerCase()}>{side}</span></td><td>{amount}</td><td>{value}</td><td className="muted">{time}</td><td><button className="row-more">•••</button></td></tr>)}</tbody></table></div></section>;
}
