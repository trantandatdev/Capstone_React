import dayjs from "dayjs";
import React from "react";

export default function ButtonTime({ movieTime }) {
  const time = dayjs(movieTime.ngayChieuGioChieu).format("DD-MM-YYYY ~ HH:mm");

  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {time}
    </button>
  );
}
