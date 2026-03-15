import Link from 'next/link';

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
          <span className="command-kicker">Phase 3 · Animated Screen</span>
          <h1>Orbital Command Center</h1>
          <p>
            Một màn hình mới theo phong cách sci-fi dashboard. Từ đây mình sẽ
            bổ sung dần nhiều lớp giao diện và animation để tạo cảm giác phức tạp.
          </p>

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
