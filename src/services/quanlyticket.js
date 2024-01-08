import { https } from "./configServices";

export async function getTickets(movieShowTimeId) {
  try {
    const response = await https.get("/api/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        maLichChieu: movieShowTimeId,
      },
    });
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function bookTickets(ticket) {
  try {
    const response = await https.post("/api/QuanLyDatVe/DatVe", ticket);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
