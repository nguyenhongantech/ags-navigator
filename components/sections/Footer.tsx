export default function Footer() {
  return (
    <footer className="bg-[#232f3e] border-t py-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold">SellHub VN</div>
          <div className="mt-2 text-slate-600">Nền tảng bán hàng trực tuyến cho người kinh doanh tại Việt Nam.</div>
        </div>
        <div>
          <div className="font-semibold">Tài nguyên</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a href="#faq" className="hover:underline">Trung tâm trợ giúp</a></li>
            <li><a href="#" className="hover:underline">Webinar người mới</a></li>
            <li><a href="#" className="hover:underline">Tài liệu API</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Liên hệ</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Email: support@sellhub.vn</li>
            <li>Hotline: 1900 0000</li>
            <li>Giờ hỗ trợ: 8:00–22:00, T2–CN</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="h-6 w-auto" />
        <span>&copy; 2025 Amazon Việt Nam. All rights reserved.</span>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">Chính sách</a>
        <a href="#" className="hover:underline">Liên hệ</a>
      </div>
    </footer>
  );
}
