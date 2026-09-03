export default function Sparkline({ positive = true }) {
  const points = positive ? '0,28 12,23 23,26 35,14 47,18 59,9 71,13 83,2 96,7' : '0,8 12,13 23,9 35,19 47,16 59,25 71,22 83,30 96,27';
  return <svg className="sparkline" viewBox="0 0 96 32" preserveAspectRatio="none"><polyline points={points} fill="none" stroke={positive ? '#a8dc25' : '#ff647c'} strokeWidth="1.8" /></svg>;
}
