"use client";

import Navbar from "@/components/sections/Navbar";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function AssistantPage() {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
    // Simulate human typing in the input field
  function typeInput(text: string, delay: number = 40) {
    setInput("");
    let i = 0;
    function typeNext() {
      if (i < text.length) {
        const nextChar = text[i];
        setInput((prev) => prev + nextChar);
        i++;
        setTimeout(typeNext, delay);
      } else {
        // Auto click submit with effect
        // Add effect to submit button
        if (submitBtnRef.current) {
          submitBtnRef.current.classList.add("animate-bounce");
          setTimeout(() => {
            submitBtnRef.current?.classList.remove("animate-bounce");
          }, 600);
        }
        const formEl = document.querySelector("form");
        if (formEl) {
          const event = new Event("submit", { bubbles: true, cancelable: true });
          setTimeout(() => formEl.dispatchEvent(event), 600);
        }
      }
    }
    if (text.length > 0) {
      setTimeout(typeNext, delay);
    }
  }
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [lang, setLang] = useState<"vi" | "en">("en");
  const bottomRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    greet();
  }, [lang]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function greet() {
    setMessages([
      {
        role: "bot",
        text:
          lang === "vi"
            ? `Chào bạn, tôi là AI Navigator – trợ lý thông minh giúp doanh nghiệp từng bước khám phá và bắt đầu bán hàng hiệu quả trên Amazon.
Cho tôi hỏi, bạn đang tìm hiểu vì:
    1. Muốn bắt đầu bán nhưng chưa rõ nên bán gì?
    2. Đã có sản phẩm rồi nhưng chưa chắc liệu có phù hợp với thị trường Mỹ?
    3. Cả hai?`
            : `Hello, I am AI Navigator - an intelligent assistant that helps businesses explore and start selling effectively on Amazon step by step.
May I ask what you are looking to learn about:
    1. Want to start selling but not sure what to sell?
    2. Already have a product but not sure if it fits the US market?
    3. Both?`,
      },
    ]);

  }

  useEffect(() => {
    setInput("");
    const timer = setTimeout(() => {
      typeInput(
        lang === "vi"
          ? "Mình đã có sản phẩm rồi – đồ nội thất bằng gỗ – nhưng không rõ mặt hàng của mình có dễ bán hay phù hợp thị trường Mỹ không."
          : "I already have a product – wooden furniture – but I'm not sure if my product is easy to sell or suitable for the US market."
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [lang]);

  async function sendUser(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    const res = await fetch("/api/assistant", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: text,
        lang,
      }),
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: "bot", text: data.text }]);
    if (data.suggestAnswer) {
      typeInput(data.suggestAnswer);
    }
    if (data.intent === "confirmation") {
      // Send automatically after 1 second
      setTimeout(() => {
        // Show popup to gather information
        // (Simulated popup)
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text:
              lang === "vi"
                ? "Đã thu thập thông tin về dự án của bạn từ Quantrics"
                : "Gathered information about your project from Quantrics",
          },
          {
            role: "bot",
            text:
              lang === "vi"
                ? `Nếu bạn muốn đội ngũ của bạn có kiến thức cơ bản về Amazon hãy đăng ký khóa học Nova – khoá học online miễn phí giúp bạn nắm rõ:
✅ Quy trình vận hành
✅ Cách nghiên cứu sản phẩm
✅ Setup gian hàng đúng chuẩn
📘 Tôi có thể gửi bạn link đăng ký nếu bạn muốn?`
                : `If you want your team to have a basic understanding of Amazon, please register for the Nova course - a free online course to help you understand:
✅ Operating procedures
✅ How to research products
✅ Setting up a store correctly
📘 I can send you the registration link if you want?`,
          },
        ]);
        typeInput(lang === "vi" ? "OK, bạn cứ gửi link Nova cho tôi. Tôi muốn học thêm trước khi bắt đầu. Tôi cũng đã điền thông tin, vui lòng kết nối với Account Manager" :
           "OK, please send me the Nova link. I want to learn more before starting. I have also filled in the information, please connect with the Account Manager.");
      }, 1000);
    }
  }

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-2xl min-h-screen flex flex-col p-4 bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl shadow-lg border border-slate-100">
        <header className="sticky top-0 z-10 flex justify-between items-center bg-white/80 backdrop-blur border-b pb-2 mb-4 px-2 rounded-t-2xl shadow-sm">
          <h1 className="text-2xl font-bold" style={{ color: "#ff6200" }}>
            AGS Navigator
          </h1>
          <button
            onClick={() => setLang((l) => (l === "vi" ? "en" : "vi"))}
            className="text-sm underline px-2 py-1 rounded hover:bg-blue-100 transition-colors"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
        </header>

        <div className="flex-1 overflow-y-auto space-y-3 mb-4 px-1 py-2 ">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] whitespace-pre-wrap px-4 py-3 text-base rounded-2xl shadow-md border ${
                  m.role === "user"
                    ? "bg-[#ff6200] text-white border-[#ff6200]"
                    : "bg-white text-slate-800 border-slate-200"
                }`}
                style={{ wordBreak: "break-word" }}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendUser(input);
            }}
            className="flex gap-2 items-center bg-white rounded-xl shadow-lg px-3 py-3 border border-slate-200"
            style={{ position: "sticky", bottom: 0 }}
            >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
              lang === "vi" ? "Nhập câu hỏi của bạn…" : "Type your question…"
              }
              className="flex-1 rounded-xl border px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
              style={{ wordBreak: "break-word", whiteSpace: "pre-wrap", minHeight: 48, maxHeight: 120 }}
              rows={2}
            />
          <button
            type="submit"
            ref={submitBtnRef}
            className="rounded-xl px-5 py-2 text-base font-semibold text-white bg-[#ff6200] hover:bg-orange-700 transition-colors shadow"
          >
            {lang === "vi" ? "Gửi" : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
