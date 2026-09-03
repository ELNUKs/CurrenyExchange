import Icon from './Icon';

const nav = [['grid', 'Overview'], ['chart', 'Markets'], ['wallet', 'Portfolio'], ['settings', 'Settings']];

export default function Sidebar() {
  return <aside className="sidebar">
    <a className="brand" href="#top"><span className="brand-mark">P</span><span>pulse</span></a>
    <nav>{nav.map(([icon, label], index) => <a className={index === 0 ? 'active' : ''} href={'#' + label.toLowerCase()} key={label}><Icon name={icon} /><span>{label}</span></a>)}</nav>
    <div className="sidebar-footer"><div className="help">?</div><div className="user-avatar">JD</div></div>
  </aside>;
}
