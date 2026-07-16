import { Link } from "react-router-dom";

const features = [
  {
    icon: "📷",
    title: "Quét mã QR",
    desc: "Quét mã truy xuất nguồn gốc sản phẩm",
  },
  {
    icon: "🌿",
    title: "Độ an toàn",
    desc: "Đánh giá mức độ an toàn thực phẩm",
  },
  {
    icon: "⭐",
    title: "Độ uy tín",
    desc: "Xem đánh giá nhà sản xuất",
  },
  {
    icon: "🚜",
    title: "Nhà sản xuất",
    desc: "Thông tin vùng trồng và đơn vị sản xuất",
  },
  {
    icon: "📦",
    title: "Chuỗi cung ứng",
    desc: "Theo dõi toàn bộ hành trình sản phẩm",
  },
  {
    icon: "📊",
    title: "Báo cáo",
    desc: "Thống kê dữ liệu truy xuất",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-bold leading-tight text-green-800">
              Truy xuất nguồn gốc
              <br />
              nông sản thông minh
            </h2>

            <p className="mb-8 text-lg text-gray-600">
              Kiểm tra nguồn gốc, độ an toàn và mức độ uy tín của sản phẩm trước
              khi quyết định mua.
            </p>

            <button className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
              📷 Quét mã QR (Developing)
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
              alt="Vegetables"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <h3 className="mb-10 text-center text-4xl font-bold text-green-700">
          Chức năng chính
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-green-100 bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>

              <h4 className="mb-3 text-2xl font-semibold">
                {item.title}
              </h4>

              <p className="mb-6 text-gray-600">
                {item.desc}
              </p>

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                Developing
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-green-900 py-8 text-center text-green-100">
        © 2026 Nguồn gốc số • Minh bạch • An toàn • Tin cậy
      </footer>
    </div>
  );
};

export default Home;