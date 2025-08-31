"use client";

import { useState } from "react";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null|boolean>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setOk(null);
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        category: formData.get("category"),
      })
    });
    setOk(res.ok);
    setLoading(false);
  }

  return (
    <section id="signup" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Amazon Ember, Arial, sans-serif' }}>Đăng ký bán hàng trên Amazon</h2>
          <p className="mt-2 text-slate-600">Điền thông tin để nhận hướng dẫn KYC và kích hoạt tài khoản.</p>
          <ul className="mt-4 list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li>Hỗ trợ gọi tư vấn 1–1 miễn phí cho người mới.</li>
            <li>Gửi checklist giấy tờ và link đăng ký qua email.</li>
            <li>Ưu đãi phí cho ngành hàng mới trong 30 ngày đầu.</li>
          </ul>
        </div>
        <form action={onSubmit} className="rounded-2xl border p-5 shadow-sm grid gap-3">
          <input name="fullName" required placeholder="Họ và tên" className="rounded-xl px-5 py-4" />
          <input name="email" required type="email" placeholder="Email" className="rounded-xl px-5 py-4" />
          <input name="phone" required placeholder="Số điện thoại" className="rounded-xl px-5 py-4" />
          <select name="category" className="rounded-xl border px-3 py-2" defaultValue="">
            <option value="" disabled>Ngành hàng dự kiến</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Home</option>
          </select>
          <button type="submit" className="rounded-xl bg-[#ff6200] text-white px-6 py-4 text-lg font-bold shadow hover:bg-[#f90] transition">
            Đăng ký tư vấn
          </button>
          {ok === true && <div className="text-xs text-green-600">Đã nhận thông tin, chúng tôi sẽ liên hệ sớm.</div>}
          {ok === false && <div className="text-xs text-red-600">Gửi thất bại. Vui lòng thử lại.</div>}
          <div className="text-xs text-slate-500">Bằng cách gửi, bạn đồng ý với Điều khoản & Chính sách bảo mật.</div>
        </form>
      </div>
    </section>
  );
}
