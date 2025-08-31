"use client";

import { useState } from "react";
import { estimateFees } from "@/lib/fees";

export default function Fees() {
  const [price, setPrice] = useState(300000);
  const [cat, setCat] = useState("default");
  const [ful, setFul] = useState<"fbm"|"fbl">("fbm");
  const { fee, payout } = estimateFees(price, cat, ful);

  return (
    <section id="fees" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Phí tham khảo</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Công cụ dưới đây giúp bạn ước tính nhanh. Biểu phí thực tế phụ thuộc ngành hàng/chương trình.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              <label className="col-span-2 text-sm text-slate-600">Giá bán (VND)</label>
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value || 0))} className="col-span-2 rounded-xl border px-3 py-2" />
              <div>
                <label className="text-sm text-slate-600">Ngành hàng</label>
                <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full rounded-xl border px-3 py-2">
                  <option value="default">General</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="beauty">Beauty</option>
                  <option value="home">Home</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Fulfillment</label>
                <select value={ful} onChange={(e) => setFul(e.target.value as any)} className="w-full rounded-xl border px-3 py-2">
                  <option value="fbm">Tự giao (FBM)</option>
                  <option value="fbl">Fulfillment</option>
                </select>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <div>Phí ước tính: <b>{fee.toLocaleString()}₫</b></div>
              <div>Tiền về dự kiến: <b>{payout.toLocaleString()}₫</b></div>
              <div className="text-xs text-slate-500 mt-1">* Chỉ tham khảo.</div>
            </div>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Gợi ý tối ưu chi phí</h3>
            <ul className="mt-3 list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Tối ưu kích thước/khối lượng để giảm phí vận chuyển.</li>
              <li>Gộp đơn/đợt hàng để tối ưu phí lưu kho.</li>
              <li>Dùng voucher thay vì giảm giá trực tiếp để tối đa lợi nhuận.</li>
              <li>Đăng ký chương trình phí ưu đãi theo ngành hàng (khi đủ điều kiện).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
