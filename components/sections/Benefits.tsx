export default function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#232f3e]" style={{ fontFamily: 'Amazon Ember, Arial, sans-serif' }}>Lợi ích khi bán hàng trên Amazon</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border p-5 shadow-sm">
              <div className="text-3xl">{it.icon}</div>
              <div className="mt-3 font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  { icon: "🛍️", title: "Tiếp cận khách hàng toàn cầu", desc: "Mở rộng thị trường, tiếp cận hàng triệu khách hàng trên Amazon." },
  { icon: "⚙️", title: "Công cụ quảng cáo & phân tích", desc: "Tăng doanh số với các giải pháp quảng cáo và phân tích hiệu quả từ Amazon." },
  { icon: "🚀", title: "Hỗ trợ chuyên sâu", desc: "Đội ngũ Amazon Việt Nam hỗ trợ 1–1, hướng dẫn từng bước cho người mới." },
];
