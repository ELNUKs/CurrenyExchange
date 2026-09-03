import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import Watchlist from './components/Watchlist';
import Allocation from './components/Allocation';
import ActivityTable from './components/ActivityTable';
import AssetsPage from './pages/AssetsPage';

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main>
        <Header />

        <div className="dashboard-grid">
          <BalanceCard />
          <Watchlist />
          <Allocation />
          <ActivityTable />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<AssetsPage />} />
      </Routes>
    </BrowserRouter>
  );
}