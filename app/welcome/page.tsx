import Link from 'next/link';

const features = [
  {
    title: 'App Router',
    description: 'Tổ chức màn hình rõ ràng với thư mục app/ của Next.js.',
  },
  {
    title: 'TypeScript',
    description: 'Dễ mở rộng hơn khi project bắt đầu có thêm component và logic.',
  },
  {
    title: 'Responsive UI',
    description: 'Bố cục tối giản, dễ chỉnh tiếp để làm landing page hoặc dashboard.',
  },
];

export default function WelcomePage() {
  return (
    <main className="page-shell">
      <section className="card">
        <span className="badge">Màn hình mới</span>
        <h1>Welcome Screen</h1>
        <p>
          Màn hình này đã được thêm mới vào repo <strong>nextjs-lession-1</strong>.
          Bạn có thể dùng nó làm trang giới thiệu, onboarding hoặc demo UI cơ bản.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-item">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="actions">
          <Link href="/" className="secondary-btn">
            Quay về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}
