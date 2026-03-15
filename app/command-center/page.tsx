import Link from 'next/link';
import {
  droneFleet,
  energyRails,
  missionTimeline,
  statusFeed,
  systemStats,
} from './data';

const actions = ['Stabilize Grid', 'Deploy Probe', 'Sync Nodes', 'Run Diagnostics'];

export default function CommandCenterPage() {
  return (
    <main className="command-page">
      <div className="command-background" aria-hidden="true">
        <span className="command-orb orb-a" />
        <span className="command-orb orb-b" />
        <span className="command-orb orb-c" />
        <span className="command-grid" />
        <span className="command-noise" />
      </div>

      <section className="command-shell">
        <div className="command-frame">
          <header className="command-hero">
            <div>
              <span className="command-kicker">Phase 3 · Animated Screen</span>
              <h1>Orbital Command Center</h1>
              <p>
                Giao diện mới mô phỏng một trung tâm điều phối ngoài quỹ đạo với
                nhiều lớp thông tin, tín hiệu động và bảng điều khiển dày đặc.
              </p>
            </div>

            <div className="command-hero-panel">
              <strong>Live Core Status</strong>
              <span>All systems synced · latency 12ms</span>
              <div className="command-hero-line" />
              <small>Telemetry stream refreshed every 3.2s</small>
            </div>
          </header>

          <section className="command-stats">
            {systemStats.map((stat) => (
              <article key={stat.label} className="command-stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>{stat.detail}</small>
              </article>
            ))}
          </section>

          <section className="command-grid-layout">
            <article className="command-panel radar-panel">
              <div className="panel-heading">
                <span>Sector Radar</span>
                <strong>12 active traces</strong>
              </div>
              <div className="radar-core">
                <span className="radar-ring ring-1" />
                <span className="radar-ring ring-2" />
                <span className="radar-ring ring-3" />
                <span className="radar-sweep" />
                <span className="radar-dot dot-1" />
                <span className="radar-dot dot-2" />
                <span className="radar-dot dot-3" />
              </div>
            </article>

            <article className="command-panel status-panel">
              <div className="panel-heading">
                <span>Status Feed</span>
                <strong>Realtime uplink</strong>
              </div>
              <div className="status-list">
                {statusFeed.map((item) => (
                  <div key={item} className="status-item">
                    <span className="status-ping" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="command-lower-grid">
            <section className="command-panel timeline-panel">
              <div className="panel-heading">
                <span>Mission Timeline</span>
                <strong>Current orbital cycle</strong>
              </div>
              <div className="timeline-list">
                {missionTimeline.map((item) => (
                  <article key={item.time + item.title} className="timeline-item">
                    <div className="timeline-time">{item.time}</div>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="command-panel energy-panel">
              <div className="panel-heading">
                <span>Energy Rails</span>
                <strong>Pulse distribution</strong>
              </div>
              <div className="energy-bars">
                {energyRails.map((level, index) => (
                  <div key={index} className="energy-bar">
                    <span style={{ height: `${level}%` }} />
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="command-panel fleet-panel">
            <div className="panel-heading">
              <span>Drone Fleet</span>
              <strong>Autonomous formation map</strong>
            </div>
            <div className="fleet-grid">
              {droneFleet.map((drone) => (
                <article key={drone.name} className="fleet-card">
                  <div className="fleet-card-top">
                    <strong>{drone.name}</strong>
                    <span>{drone.role}</span>
                  </div>
                  <div className="fleet-meter">
                    <span />
                  </div>
                  <div className="fleet-meta">
                    <small>Battery {drone.battery}</small>
                    <small>{drone.state}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="command-panel dock-panel">
            <div className="panel-heading">
              <span>Action Dock</span>
              <strong>Quick intervention commands</strong>
            </div>
            <div className="dock-actions">
              {actions.map((action) => (
                <button key={action} type="button" className="dock-btn">
                  {action}
                </button>
              ))}
            </div>
            <div className="command-nav">
              <Link href="/" className="secondary-btn">
                Về trang chủ
              </Link>
              <Link href="/course" className="primary-btn">
                Xem course screen
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
