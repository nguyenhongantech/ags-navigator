// components/sections/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      title: "Bước chuẩn bị",
      icon: "🔍",
      items: [
        "Lựa chọn và tìm hiểu luật liên quan đến sản phẩm muốn bán.",
        "Xác định loại hình kinh doanh và tài khoản bán hàng phù hợp.",
      ],
    },
    {
      title: "Trước khi bán",
      icon: "📑",
      items: [
        "Đăng ký tài khoản bán hàng.",
        "Tìm hiểu và tạo danh mục sản phẩm trên Seller Central.",
        "Xác định cách thức vận chuyển và hậu cần.",
      ],
    },
    {
      title: "Bắt đầu bán",
      icon: "🛒",
      items: [
        "Sử dụng công cụ quảng cáo.",
        "Tối ưu hóa chi phí bán hàng.",
      ],
    },
    {
      title: "Sau khi bán",
      icon: "📈",
      items: [
        "Theo dõi chỉ số hiệu suất trong Seller Central.",
        "Quản lý hàng tồn kho và tham gia các chương trình khuyến mãi.",
      ],
    },
  ];

  return (
    <section id="how" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          04 bước để bán hàng trên Amazon
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                {s.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
         {/* CTA helper */}
        <div className="mt-8 rounded-2xl border bg-white p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm text-slate-700">
            Cần trợ lý tư vấn từng bước? Hãy để AGS Navigator AI giúp bạn.
          </div>
          <a href="/ags-navigator" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white"
             style={{ background: "#ff6200" }}>
            Mở AGS Navigator AI
          </a>
        </div>
      </div>
    </section>
  );
}
