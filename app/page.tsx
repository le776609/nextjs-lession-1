import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="card hero-card">
        <span className="badge">Next.js Lesson 1</span>
        <h1>Chào mừng đến với project đầu tiên</h1>
        <p>
          Đây là trang chủ. Tôi đã thêm một màn hình mới để bạn có thể mở rộng repo
          này theo kiểu landing page + màn hình giới thiệu.
        </p>
        <div className="actions">
          <Link href="/welcome" className="primary-btn">
            Mở màn hình mới
          </Link>
        </div>
      </section>
    </main>
  );
}
