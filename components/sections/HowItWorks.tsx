export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#232f3e]" style={{ fontFamily: 'Amazon Ember, Arial, sans-serif' }}>Quy trình bán hàng trên Amazon</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="rounded-xl border p-8 bg-white shadow flex flex-col items-center text-center">
            <img src="https://m.media-amazon.com/images/G/42/sell/images/how-register-vn.png" alt="Đăng ký" className="h-16 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Đăng ký tài khoản</h3>
            <p className="text-[#232f3e]">Điền thông tin, xác thực và bắt đầu bán hàng trên Amazon.</p>
          </div>
          <div className="rounded-xl border p-8 bg-white shadow flex flex-col items-center text-center">
            <img src="https://m.media-amazon.com/images/G/42/sell/images/how-list-vn.png" alt="Đăng sản phẩm" className="h-16 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Đăng sản phẩm</h3>
            <p className="text-[#232f3e]">Tạo danh sách sản phẩm, tối ưu mô tả và hình ảnh.</p>
          </div>
          <div className="rounded-xl border p-8 bg-white shadow flex flex-col items-center text-center">
            <img src="https://m.media-amazon.com/images/G/42/sell/images/how-grow-vn.png" alt="Quản lý & phát triển" className="h-16 mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-[#232f3e]">Quản lý & phát triển</h3>
            <p className="text-[#232f3e]">Quản lý đơn hàng, quảng cáo, phân tích và mở rộng kinh doanh.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
