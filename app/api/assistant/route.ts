import { NextResponse } from "next/server";

type Payload = { message?: string; intent?: string; lang?: "vi" | "en" };

const KB = [
  {
    ua: {
      vi: `Bên tôi có bàn gỗ đơn giản, đang bán cho EU – có thể làm dòng lắp ráp dễ.`,
      en: `We have a simple wooden table, currently selling to the EU – could potentially make an easy-to-assemble line.`,
    },
    a: {
      vi: `Tuyệt! Gỗ và furniture là ngành hàng tiềm năng – nhưng tại thị trường Mỹ có vài nhóm sản phẩm đang tăng trưởng nhanh, vài nhóm khác thì cạnh tranh cao.
Để tôi kiểm tra nhanh một số xu hướng bán chạy hiện nay trong ngành Furniture & Home trên Amazon US…
🔎 (Giả lập truy cập dữ liệu)
📈 Top tăng trưởng:
– Bàn làm việc tại nhà (home office)
– Kệ sách treo tường
– Nội thất tối giản, lắp ráp dễ
Bạn có đang sản xuất/dự định bán dòng nào tương tự không?`,
      en: `Great! Wood and furniture is a potential category – but in the US market there are some product groups that are growing fast, while others are highly competitive.
Let me quickly check some current best-selling trends in the Furniture & Home category on Amazon US…
🔎 (Simulated data from NASA)
📈 Top growth:
– Home office desks
– Wall-mounted bookshelves
– Minimalist, easy-to-assemble furniture
Are you producing/planning to sell any similar lines?`,
    },
    intents: ["get-started", "kyc"],
  },
  {
    ua: {
      vi: `Chưa có kho, muốn tìm hiểu xem gửi hàng sang Amazon thì chi phí thế nào.`,
      en: `No warehouse yet, want to learn about the costs of sending goods to Amazon.`,
    },
    a: {
      vi: `Tuyệt vời, dòng này đang phát triển rất tốt.
Bạn có thể chọn bán theo hai cách chính:
✅ FBA – Fulfillment by Amazon (gửi hàng vào kho Amazon)
✅ FBM – Tự xử lý đơn hàng từ VN hoặc qua đại lý ủy quyền
Bạn đã có kho tại Mỹ hay đang muốn tìm hiểu về phương án FBA?`,
      en: `Great, this line is developing very well.
You can choose to sell in two main ways:
✅ FBA – Fulfillment by Amazon (send goods to Amazon's warehouse)
✅ FBM – Self-fulfillment from VN or through authorized agents
Do you already have a warehouse in the US or are you looking to learn about the FBA option?`,
    },
    intents: ["declare-product"],
  },
  {
    ua: {
      vi: `Kích thước 80x50x30 cm, nặng khoảng 5kg.`,
      en: `Dimensions 80x50x30 cm, weighs about 5kg.`,
    },
    a: {
      vi: `Revenue Calculator giúp bạn ước tính chi phí liên quan FBA: (Revenue Calculator tool link). Tôi sẽ demo, tính thử chi phí FBA cho một sản phẩm của bạn.
Bạn cho tôi biết kích thước & trọng lượng gần đúng của một sản phẩm nhé (ví dụ: bàn gỗ của bạn).`,
      en: `Revenue Calculator helps you estimate FBA-related costs: (Revenue Calculator tool link). I will demo and try to calculate the FBA cost for one of your products.
Can you provide me with the approximate size & weight of a product (e.g., your wooden table)?`,
    },
    intents: ["shipping"],
  },
  {
    ua: {
      vi: `Tôi có một phần, nhưng chưa biết rõ cần gì khi bán ở Mỹ.`,
      en: `I have some information, but I'm not sure what is needed when selling in the US.`,
    },
    a: {
      vi: `Được rồi. Tôi sẽ dùng công cụ Revenue Calculator để tính toán...
🔧 (Giả lập tính toán...)
Kết quả chi phí FBA tham khảo:
Phí vận hành & fulfillment: ~$7.50
Phí lưu kho tháng thường: ~$0.75 / đơn vị / tháng
Tổng chi phí FBA ước tính mỗi đơn vị: ~$8.25
📌 Lưu ý: Chi phí này sẽ thay đổi tuỳ mùa, kích thước và kênh vận chuyển bạn chọn.
Với sản phẩm gỗ, bạn có thể cần chuẩn bị một số giấy tờ cơ bản như:
Giấy phép kinh doanh
Chứng nhận nguồn gỗ (FSC hoặc tương đương)
MSDS nếu có sơn/phụ gia
Bạn đã có sẵn những giấy tờ này chưa, hay cần tôi gửi checklist chi tiết?`,
      en: `Alright. I will use the Revenue Calculator tool to compute...
🔧 (Simulated calculation...)
Estimated FBA cost results:
Operating & fulfillment fee: ~$7.50
Monthly storage fee: ~$0.75 / unit / month
Estimated total FBA cost per unit: ~$8.25
📌 Note: This cost will vary depending on the season, size, and shipping channel you choose.
With wooden products, you may need to prepare some basic documents such as:
Business license
Wood source certification (FSC or equivalent)
MSDS if there are paints/additives
Do you already have these documents ready, or do you need me to send a detailed checklist?`,
    },
    intents: ["calculate-fba"],
  },
  {
    ua: {
      vi: `Vâng, tôi rất nghiêm túc với dự án này.`,
      en: `Yes, I am very serious about this project.`,
    },
    a: {
      vi: `Tôi thấy bạn đang có định hướng khá rõ ràng và sản phẩm phù hợp với thị trường.
🔥 Hiện tại Amazon có chương trình hỗ trợ 1:1 miễn phí từ đội ngũ Account Manager (AM), nhưng để được hỗ trợ bạn cần:
Cam kết phát triển lâu dài trên Amazon
Bán hàng đúng chính sách
Sẵn sàng đầu tư thương hiệu tại Mỹ
Điều này có phù hợp với định hướng của bạn không ?`,
      en: `I see you have a clear direction and your product fits the market well.
🔥 Currently, Amazon has a free 1:1 support program from the Account Manager (AM) team, but to get support you need to:
Commit to long-term development on Amazon
Sell in accordance with policies
Be ready to invest in the brand in the US
Does this align with your direction?`,
    },
    intents: ["paper-work"],
  },
{
    ua: {
      vi: ``,
      en: ``,
    },
    q: {
      vi: `Bạn có thể cho tôi biết thêm về dự án của bạn không?`,
      en: `Can you tell me more about your project?`,
    },
    a: {
      vi: `Tuyệt vời, tôi sẽ chuyển thông tin của bạn đến đội ngũ Account Manager để liên hệ tư vấn 1:1. Bạn vui lòng cung cấp nhanh vài thông tin nhé?
1.Tên bạn
2.Tên công ty hoặc brand
3.Số điện thoại và email
4.Sản phẩm chính (bạn có thể chọn lại: bàn gỗ, ghế, đồ decor, hoặc chọn "Khác")
5.Số năm kinh nghiệm E-commerce / CBEC (nếu có)
6. Kinh nghiệm xuất khẩu
7.Số người bạn dự kiến sẽ đầu tư cho team Amazon
👉 (Giao diện có thể hiện popup Quantrics link, với giải thích: “Dùng để phân tích mức độ sẵn sàng và kết nối với chuyên gia phù hợp”)`,
      en: `Great, I will forward your information to the Account Manager team for 1:1 consultation. Please quickly provide some information:
1. Your name
2. Company or brand name
3. Phone number and email
4. Main product (you can choose again: wooden table, chair, decor items, or choose "Other")
5. Years of E-commerce / CBEC experience (if any)
6. Export experience
7. Number of people you plan to invest in the Amazon team
👉 (The interface may show a popup Quantrics link, with the explanation: “Used to analyze readiness and connect with the right experts”)`,
    },
    intents: ["confirmation"],
  },
  {
    ua: {
      vi: ``,
      en: ``,
    },
    a: {
      vi: `Tuyệt vời! Đây là link đăng ký Nova miễn phí: [link]
Tôi ghi nhận thông tin bạn đã cung cấp:
1.Tên bạn: Nguyễn Văn A.
2.Tên công ty hoặc brand: ABC Furniture.
3.Số điện thoại và email: 0123456789 - infor@abcfuniture.com.
4.Sản phẩm chính (bạn có thể chọn lại: Bàn gỗ.
5.Số năm kinh nghiệm E-commerce / CBEC: 2 năm kinh doanh trên Shoppe VN.
6.Kinh nghiệm xuất khẩu: 5 năm US/EU.
7.Số người bạn dự kiến sẽ đầu tư cho team Amazon: > 2.
Sau khoá học, tôi sẽ gợi ý các bước tiếp theo dựa trên mức độ sẵn sàng của bạn nhé.`,
      en: `Great! Here is the link to register for the free Nova course: [link]
I have noted the information you provided:
1. Your name: Nguyen Van A.
2. Company or brand name: ABC Furniture.
3. Phone number and email: 0123456789 - infor@abcfuniture.com.
4. Main product (you can choose again: Wooden table.
5. Years of E-commerce / CBEC experience: 2 years of business on Shoppe VN.
6. Export experience: 5 years in the US/EU.
7. Number of people you plan to invest in the Amazon team: > 2.
After the course, I will suggest the next steps based on your readiness level.`,
    },
    intents: ["ending"],
  },

];

export async function POST(req: Request) {
  const data = (await req.json()) as Payload;
  const lang = data.lang ?? "vi";
  const t = (data.message ?? "").toLowerCase();

  let intent = data.intent;
  if (!intent) {
    if (/(ký|dang ky|đăng ký|đã có sản phẩm rồi|already have a product)/.test(t))
      intent = "get-started";
    else if (
      /(dòng lắp ráp dễ|an easy-to-assemble line|gỗ đơn giản|simple wooden table)/.test(
        t
      )
    )
      intent = "declare-product";
    else if (
      /(chưa có kho|tìm hiểu xem gửi hàng sang amazon|no warehouse yet|fba)/.test(
        t
      )
    )
      intent = "shipping";
    else if (/(80x50x30|5kg)/.test(t)) intent = "calculate-fba";
    else if (/(tôi rất nghiêm túc|i am very serious)/.test(t)) intent = "confirmation";
    else if (/(nhưng chưa biết rõ cần gì khi bán|not sure what is needed when selling in the us)/.test(t)) intent = "paper-work";
    else if (/(gửi link nova cho tôi|send me the nova link)/.test(t)) intent = "ending";
  }

  if (intent) {
    const faq = KB.filter((f) => f.intents.includes(intent!)).map((f) => ({
      a: `${f.a[lang]}`,
      ua: `${f.ua[lang]}`,
    }));
    const text =
      faq.length > 0
        ? faq[0].a
        : lang === "vi"
        ? "Mình chưa có câu trả lời phù hợp."
        : "No matching answer.";
    return NextResponse.json({
      role: "bot",
      text,
      intent,
      suggestAnswer: faq.length > 0 ? faq[0].ua : undefined,
    });
  }

  const text =
    lang === "vi"
      ? "Mình chưa hiểu ý bạn. Hãy chọn một chủ đề hoặc hỏi ngắn gọn hơn."
      : "I didn't get that. Pick a topic or try a shorter question.";

  return NextResponse.json({ role: "bot", text });
}
