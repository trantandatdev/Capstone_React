import React, { useState } from "react";
import { Button, message } from "antd";
import "./DetailSeat.scss";
import { useTicketContext } from "./TicketsContext";
import { bookTickets } from "../../services/quanlyticket";
import Loading from "../../components/Loading/Loading";

const DetailSeat = ({ infoCinema }) => {
  console.log("infoCinema:", infoCinema);

  const { totalPrice, selectSeats, handleBooking } = useTicketContext();
  const [isLoading, setIsLoading] = useState(false);

  const listTickets = selectSeats.map((seat) => ({
    maGhe: seat.maGhe,
    giaVe: seat.giaVe,
  }));

  const handleBookTickets = async () => {
    if (selectSeats.length === 0) {
      message.error("Vui lòng chọn ghế trước khi đặt vé.");
      return;
    }

    setIsLoading(true);

    try {
      await bookTickets({
        maLichChieu: infoCinema.maLichChieu,
        danhSachVe: listTickets,
      });

      // handleBooking is a function to handle the booking process
      handleBooking();

      message.success("Đặt vé thành công! Chúc mừng bạn!");
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error booking tickets:", error);
      message.error("Đã có lỗi xảy ra khi đặt vé. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  const ticketItems = [
    { label: "Cụm rạp:", value: infoCinema?.tenCumRap },
    { label: "Địa chỉ:", value: infoCinema?.diaChi },
    { label: "Rạp:", value: infoCinema?.tenRap },
    { label: "Ngày chiếu:", value: infoCinema?.ngayChieu },
    { label: "Tên phim:", value: infoCinema?.tenPhim },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="detailtickets">
      <div className="detailticketsPrice">
        <h3>
          {totalPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </h3>
      </div>
      {ticketItems.map((item, index) => (
        <div className="detailticketsItem" key={index}>
          <p>{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
      <div className="detailticketsItem">
        <p>Chọn:</p>
        <p>
          {selectSeats.map((seat, index) => (
            <span key={index} className="detailticketsNumberseat">
              Ghế: {seat.tenGhe},
            </span>
          ))}
        </p>
      </div>
      <div className="detailticketsBtn">
        <Button
          className="w-full bg-red-500 text-white font-bold rounded"
          loading={isLoading}
          onClick={handleBookTickets}
        >
          <span className="inline-block align-middle">ĐẶT VÉ</span>
        </Button>
      </div>
    </div>
  );
};

export default DetailSeat;
