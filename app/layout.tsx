import "./globals.css";

export const metadata = {
  title: "SellHub VN – Bắt đầu bán hàng trực tuyến",
  description: "Landing + Chatbot cho người bán mới.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#f3f3f3] text-[#232f3e] font-sans" style={{ fontFamily: 'Amazon Ember, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
