import { useState } from "react";

const Admin = () => {

  const [form, setForm] = useState({
    organizationName: "",
    organizationCode: "",
    organizationType: "FARM",

    address: "",
    phone: "",
    email: "",

    fullName: "",
    userName: "",
    password: "",

    managerPhone: "",
    managerEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Demo: Tạo Organization thành công!");

    setForm({
      organizationName: "",
      organizationCode: "",
      organizationType: "FARM",

      address: "",
      phone: "",
      email: "",

      fullName: "",
      userName: "",
      password: "",

      managerPhone: "",
      managerEmail: "",
    });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="mx-auto max-w-6xl p-8">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Organization */}

          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold text-green-700">
              Tạo Organization
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                name="organizationName"
                value={form.organizationName}
                onChange={handleChange}
                placeholder="Tên tổ chức"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="organizationCode"
                value={form.organizationCode}
                onChange={handleChange}
                placeholder="Mã tổ chức"
                className="w-full rounded-lg border p-3"
              />

              <select
                name="organizationType"
                value={form.organizationType}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              >
                <option value="FARM">FARM</option>
                <option value="COOPERATIVE">COOPERATIVE</option>
                <option value="COMPANY">COMPANY</option>
                <option value="DISTRIBUTOR">DISTRIBUTOR</option>
              </select>

              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Địa chỉ"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-lg border p-3"
              />

              <hr />

              <h3 className="font-semibold text-green-700">
                Thông tin tài khoản quản lý
              </h3>

              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Họ tên"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Tên đăng nhập"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="managerPhone"
                value={form.managerPhone}
                onChange={handleChange}
                placeholder="SĐT quản lý"
                className="w-full rounded-lg border p-3"
              />

              <input
                name="managerEmail"
                value={form.managerEmail}
                onChange={handleChange}
                placeholder="Email quản lý"
                className="w-full rounded-lg border p-3"
              />

              <button
                className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white hover:bg-green-700"
              >
                Tạo Organization
              </button>

            </form>

          </div>

          {/* Batch */}

          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold text-green-700">
              Xuất dải mã cho lô hàng
            </h2>

            <div className="flex h-96 flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-300">

              <div className="text-7xl">
                📦
              </div>

              <p className="mt-5 text-xl font-semibold">
                Chức năng đang phát triển
              </p>

              <span className="mt-3 rounded-full bg-yellow-100 px-5 py-2 text-yellow-700">
                Developing...
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Admin;