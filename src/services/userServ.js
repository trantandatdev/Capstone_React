import { https } from "./configServices";

export const userServ = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08");
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  register: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  addUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
  getInfoUser: (taiKhoan) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
  editUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },
};

export async function bookingHistory(payload) {
  try {
    const response = await https.post(
      "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      payload
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function updateUser(payload) {
  try {
    const response = await https.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      payload
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
