import Link from 'next/link';

const modules = [
  {
    title: 'Nền tảng Next.js',
    description: 'Hiểu App Router, cấu trúc thư mục app/ và cách tổ chức route.',
    duration: '45 phút',
  },
  {
    title: 'UI Components',
    description: 'Tách component, chia section và dựng giao diện dễ mở rộng.',
    duration: '60 phút',
  },
  {
    title: 'Build & Deploy',
    description: 'Build production, kiểm tra lỗi và chuẩn bị deploy lên môi trường thật.',
    duration: '30 phút',
  },
];

export default function CoursePage() {
  return (
    <main className="page-shell">
      <section className="card course-card">
        <span className="badge">Phase 2</span>
        <h1>Course Overview</h1>
        <p>
          Đây là màn hình mới mô phỏng một trang giới thiệu khóa học mini trong
          project Next.js. Mục tiêu là biến repo này từ demo siêu tối giản thành
          một app có cấu trúc rõ hơn.
        </p>

        <div className="course-summary">
          <div className="summary-item">
            <strong>3</strong>
            <span>Module</span>
          </div>
          <div className="summary-item">
            <strong>2h 15m</strong>
            <span>Tổng thời lượng</span>
          </div>
          <div className="summary-item">
            <strong>Beginner</strong>
            <span>Mức độ</span>
          </div>
        </div>

        <div className="module-list">
          {modules.map((module) => (
            <article key={module.title} className="module-item">
              <div>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
              <span className="module-duration">{module.duration}</span>
            </article>
          ))}
        </div>

        <div className="actions">
          <Link href="/" className="secondary-btn">
            Về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}
