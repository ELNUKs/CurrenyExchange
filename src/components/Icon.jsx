const paths = {
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  chart: 'M4 18V6m0 12h16M7 15l4-4 3 2 5-7',
  wallet: 'M3 7h17v11H3zM3 10h17M15 14h2',
  settings: 'M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5m0-13v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.22-1.42 1.42M6.7 17.3l-1.42 1.42m0-13.64L6.7 6.5m10.1 10.1 1.42 1.42',
  bell: 'M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4',
  search: 'm20 20-4.2-4.2M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  arrow: 'm9 18 6-6-6-6',
};

export default function Icon({ name, size = 18 }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
}
