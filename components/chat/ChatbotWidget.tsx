"use client";

import { useEffect, useRef, useState } from "react";

const QUICK_INTENTS = [
  { id: "get-started", label: "Bắt đầu bán hàng" },
  { id: "fees", label: "Phí & chiết khấu" },
  { id: "shipping", label: "Vận chuyển/fulfillment" },
  { id: "kyc", label: "Hồ sơ/KYC" },
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{role: "user"|"bot"; text: string}[]>([]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<"vi"|"en">("vi");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("bot_msgs_v1");
    if (saved) setMessages(JSON.parse(saved));
    else greet();
  }, []);

  useEffect(() => {
    localStorage.setItem("bot_msgs_v1", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function greet() {
    setMessages(m => [...m, { role: "bot", text: lang === "vi"
      ? "Xin chào! Mình là trợ lý bán hàng. Mình có thể hướng dẫn bạn đăng ký, tính thử phí, hay gợi ý bước tiếp theo."
      : "Hi! I'm your seller assistant. I can guide sign‑up, estimate fees, or suggest next steps." }]);
  }

  async function sendUser(text: string, intent?: string) {
    if (!text.trim() && !intent) return;
    if (text) setMessages(m => [...m, { role: "user", text }]);
    setInput("");

    const res = await fetch("/api/assistant", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: text, intent, lang })
    });
    const data = await res.json();
    setMessages(m => [...m, { role: "bot", text: data.text }]);
  }

  return (
    <>
      <button
        aria-label="Chat with onboard assistant"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 text-white shadow-xl"
        style={{ background: "#ff9900" }}
      >
        💬 Trợ lý bán hàng
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[360px] max-w-[92vw] rounded-2xl shadow-2xl border bg-white/95 backdrop-blur">
          <div className="flex items-center justify-between rounded-t-2xl px-4 py-3" style={{ background: "#146eb4" }}>
            <div className="text-white font-semibold">Trợ lý cho người bán mới</div>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang(l => l === "vi" ? "en" : "vi")} className="text-white/90 text-xs underline">{lang === "vi" ? "EN" : "VI"}</button>
              <button onClick={() => setOpen(false)} className="text-white text-xl" aria-label="Close">×</button>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto px-3 py-3 space-y-3">
            <div className="rounded-xl border bg-slate-50 p-3 text-sm">
              {lang === "vi" ? (
                <>
                  <div className="font-medium">🎯 Mẹo nhanh</div>
                  <ul className="list-disc ml-5">
                    <li>Chọn chủ đề bên dưới để xem hướng dẫn siêu tốc.</li>
                    <li>Dùng "Tính phí nhanh" ở mục Phí.</li>
                    <li>Lưu cuộc trò chuyện – mở lại không mất lịch sử.</li>
                  </ul>
                </>
              ) : (
                <>
                  <div className="font-medium">🎯 Quick tips</div>
                  <ul className="list-disc ml-5">
                    <li>Pick a topic to get instant guidance.</li>
                    <li>Use the quick fee estimator under Fees section.</li>
                    <li>History is saved locally.</li>
                  </ul>
                </>
              )}
            </div>

            <div className="space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={
                    "max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm shadow " +
                    (m.role === "user" ? "bg-slate-900 text-white" : "bg-white border")
                  }>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {QUICK_INTENTS.map((it) => (
                <button key={it.id} onClick={() => sendUser(it.label, it.id)} className="rounded-full border px-3 py-1 text-xs hover:bg-slate-50">
                  {it.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t p-2">
            <form onSubmit={(e) => { e.preventDefault(); sendUser(input); }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === "vi" ? "Nhập câu hỏi của bạn…" : "Type your question…"}
                className="flex-1 rounded-xl border px-3 py-2 text-sm"
              />
              <button type="submit" className="rounded-xl px-4 py-2 text-sm text-white" style={{ background: "#146eb4" }}>
                {lang === "vi" ? "Gửi" : "Send"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
