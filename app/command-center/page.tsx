import Link from 'next/link';
import {
  energyRails,
  missionTimeline,
  statusFeed,
  systemStats,
} from './data';

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

          <div className="actions">
            <Link href="/" className="secondary-btn">
              Về trang chủ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
