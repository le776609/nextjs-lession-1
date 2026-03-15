import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="card hero-card">
        <span className="badge">Next.js Lesson 1</span>
        <h1>Chào mừng đến với project đầu tiên</h1>
        <p>
          Đây là trang chủ. Repo hiện có nhiều màn hình hơn để bạn dùng làm base
          cho bài học, demo UI hoặc landing page đơn giản.
        </p>
        <div className="actions centered-actions">
          <Link href="/welcome" className="primary-btn">
            Mở welcome screen
          </Link>
          <Link href="/course" className="secondary-btn">
            Mở course screen mới
          </Link>
          <Link href="/command-center" className="secondary-btn">
            Mở command center mới
          </Link>
        </div>
      </section>
    </main>
  );
}
