"use client";
import { useState } from "react";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#232f3e]" style={{ fontFamily: 'Amazon Ember, Arial, sans-serif' }}>Câu hỏi thường gặp</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-xl border p-8 bg-white shadow">
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Ai có thể bán hàng trên Amazon?</h3>
            <p className="text-[#232f3e]">Bất kỳ cá nhân hoặc doanh nghiệp nào có sản phẩm hợp pháp đều có thể đăng ký bán hàng trên Amazon.</p>
          </div>
          <div className="rounded-xl border p-8 bg-white shadow">
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Quy trình đăng ký như thế nào?</h3>
            <p className="text-[#232f3e]">Điền thông tin, xác thực và bắt đầu bán hàng ngay sau khi được duyệt.</p>
          </div>
          <div className="rounded-xl border p-8 bg-white shadow">
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Có hỗ trợ cho người mới không?</h3>
            <p className="text-[#232f3e]">Có, đội ngũ hỗ trợ Amazon Việt Nam sẽ hướng dẫn từng bước cho người mới.</p>
          </div>
          <div className="rounded-xl border p-8 bg-white shadow">
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Phí bán hàng được tính như thế nào?</h3>
            <p className="text-[#232f3e]">Phí giao dịch tính theo phần trăm giá trị đơn hàng, tuỳ ngành hàng.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
