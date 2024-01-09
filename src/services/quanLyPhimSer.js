import { https } from "./configServices";

export const quanLyPhimSer = {
  getAllBanner: () => {
    // trong các phương thức của https sẽ có 2 giá trị nhận vào, một là đoạn chuỗi endpoint, 2 là dữu liệu data truyền lên
    return https.get("api/QuanLyPhim/LayDanhSachBanner");
  },

  getAllMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08");
  },

  deleteMovie: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  addMovie: (data) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", data);
  },
  getInfoMovie: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
};
