import React, { useState } from 'react'
import './index.css'
import ScanPage from './pages/ScanPage'
import MineralDatabase from './pages/MineralDatabase'
import HistoryPage from './pages/HistoryPage'
import DashboardPage from './pages/DashboardPage'

const NAV_ITEMS = [
  { id: 'dashboard', icon: '🔬', label: 'Dashboard' },
  { id: 'scan', icon: '💎', label: 'Gem Scanner' },
  { id: 'database', icon: '📚', label: 'Mineral Database' },
  { id: 'history', icon: '🗂️', label: 'History' },
]

const TIERS = ['free', 'pro', 'lab']
const TIER_LABELS = { free: '⚡ Free', pro: '💼 Pro Trader', lab: '🔬 Lab License' }

function App() {
  const [page, setPage] = useState('scan')
  const [tier, setTier] = useState('pro')

  return (
    <div className="app-container">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">
            <div className="logo-icon">💎</div>
            <div>
              <div className="logo-text">Cerberus</div>
              <div className="logo-sub">DeepCrystal AI System</div>
            </div>
          </div>
        </div>
        <div className="sidebar-author">✦ Sudeepa Wanigarathna</div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <div
              key={item.id}
              className={`nav-item ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-tier">
          <div
            className="tier-badge"
            onClick={() => setTier(TIERS[(TIERS.indexOf(tier) + 1) % TIERS.length])}
            title="Click to cycle tiers"
          >
            {TIER_LABELS[tier]}
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="main-content">
        {page === 'dashboard' && <DashboardPage tier={tier} onNavigate={setPage} />}
        {page === 'scan' && <ScanPage tier={tier} />}
        {page === 'database' && <MineralDatabase />}
        {page === 'history' && <HistoryPage />}
      </main>
    </div>
  )
}

export default App
