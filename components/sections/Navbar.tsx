"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="https://m.media-amazon.com/images/G/28/AS/AGS/images/website/ags-logo-brightbackground-1.png" alt="Amazon Logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#benefits" className="hover:text-[#232f3e] text-[#232f3e]">Lợi ích</a>
          <a href="#how" className="hover:text-[#232f3e] text-[#232f3e]">Cách hoạt động</a>
          <a href="#fees" className="hover:text-[#232f3e] text-[#232f3e]">Phí</a>
          <a href="#faq" className="hover:text-[#232f3e] text-[#232f3e]">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#signup" className="hidden md:inline-flex rounded-xl bg-[#ff9900] text-white px-4 py-2 text-sm font-bold shadow hover:bg-[#f90] transition">Đăng ký</a>
          <button onClick={() => setOpen(v => !v)} className="md:hidden rounded-xl border px-3 py-2 text-sm">Menu</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#benefits" className="text-[#232f3e]">Lợi ích</a>
            <a href="#how" className="text-[#232f3e]">Cách hoạt động</a>
            <a href="#fees" className="text-[#232f3e]">Phí</a>
            <a href="#faq" className="text-[#232f3e]">FAQ</a>
            <a href="#signup" className="rounded-xl bg-[#ff9900] text-white px-4 py-2 font-bold shadow hover:bg-[#f90] transition">Đăng ký</a>
          </nav>
        </div>
      )}
    </header>
  );
}
