import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    organizationCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validCredential = {
      username: "admin",
      password: "admin123",
      organizationCode: "NGS",
    };

    if (
      form.username === validCredential.username &&
      form.password === validCredential.password &&
      form.organizationCode === validCredential.organizationCode
    ) {
      navigate("/admin");
      return;
    }

    alert("Tên đăng nhập, mật khẩu hoặc mã tổ chức không chính xác!");

    // Giữ nguyên username, reset password và organizationCode
    setForm((prev) => ({
      ...prev,
      password: "",
      organizationCode: "",
    }));
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-green-900/50 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/90 p-10 shadow-2xl backdrop-blur-md">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl">🌱</span>
          </div>

          <h1 className="text-3xl font-bold text-green-700">
            Nguồn gốc số
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Hệ thống truy xuất nguồn gốc nông sản
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Tên đăng nhập
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Nhập tên đăng nhập..."
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mật khẩu
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu..."
              className="w-full rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Organization Code */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mã tổ chức
            </label>

            <input
              type="text"
              name="organizationCode"
              value={form.organizationCode}
              onChange={handleChange}
              placeholder="Ví dụ: NGS"
              className="w-full rounded-xl border border-green-200 px-4 py-3 uppercase outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" />
              <span>Ghi nhớ đăng nhập</span>
            </label>

            <button
              type="button"
              className="font-medium text-green-600 hover:text-green-700"
            >
              Quên mật khẩu?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2026 Nguồn gốc số
          <br />
          Minh bạch • Tin cậy • An toàn
        </div>
      </div>
    </div>
  );
};

export default Login;