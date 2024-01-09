import React, { useEffect, useState } from "react";
import Header from "../../templates/UserTemplate/Header";
import LichChieuRap from "../HomePage/LichChieuRap";
import Footer from "../../templates/UserTemplate/Footer";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail.css";
import { Rate } from "antd";
import moment from "moment";
import "./responsiveDetail.css";
const Detail = () => {
  const { maPhim } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  useEffect(() => {
    quanLyPhimSer
      .getInfoMovie(maPhim)
      .then((res) => {
        setDetailMovie(res.data.content);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <Header />
      <div className="bg_detail">
        <div
          className="content_detail"
          style={{
            padding: "50px 100px",
          }}
        >
          <div className="flex">
            <div className="basis-4/12">
              <img
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  padding: "10px",
                }}
                src={detailMovie.hinhAnh}
                alt=""
              />
            </div>
            <div
              className="basis-8/12 space-y-4"
              style={{
                paddingLeft: "50px",
                color: "white",
                background:`linear-gradient(90deg, rgba(0,0,0,0.5102415966386555) 51%, rgba(255,254,254,0) 100%)`,
              }}
            >
              <h2 className="text-3xl">{detailMovie.tenPhim}</h2>
              <a href={detailMovie.trailer}>
                <p className="text-orange-400">{detailMovie.trailer}</p>
              </a>
              <p>
                Mô tả: <span>{detailMovie.moTa}</span>
              </p>
              {detailMovie.hot ? (
                <div className="flex">
                  <p
                    style={{
                      fontWeight: "800",
                      color: "red",
                    }}
                  >
                    Hot
                  </p>
                  <div className="fire">
                    <div className="fire-left">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-main">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-right">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-bottom">
                      <div className="main-fire" />
                    </div>
                  </div>
                </div>
              ) : (
                <p>Bình thường</p>
              )}
              {detailMovie.dangChieu ? <p>Đang chiếu</p> : <p>Đang cập nhập</p>}
              <p>
                Ngày khởi chiếu:{" "}
                {moment(detailMovie.ngayKhoiChieu).format("DD-MM-YYYY")}
              </p>
              <div>
                <p>Đánh giá</p>
                <Rate allowHalf value={detailMovie.danhGia} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
