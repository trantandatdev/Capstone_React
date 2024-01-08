import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";
import { useDispatch } from "react-redux";
import { endedLoading, startedLoading } from "../../redux/slice/loadingSlice";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        zIndex: 2,
        insetInlineEnd: 0,
        fontSize: 20,
        color: "white",
      }}
      onClick={onClick}
    >
      <i class="fa-solid fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        insetInlineStart: "0px",
        zIndex: 2,
        fontSize: 20,
        color: "white",
      }}
      onClick={onClick}
    >
      <i class="fa-solid fa-angle-left"></i>
    </div>
  );
}

const Banner = () => {
  const setting = {
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
  };
  const dispatch = useDispatch();

  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    // set trạng thái cho isActive thành true để loading xuất hiện
    // sau khi gọi dữ liệu thành công sẽ tắt loading đi
    // nếu thất bại cũng sẽ tắt loading
    dispatch(startedLoading());
    quanLyPhimSer
      .getAllBanner()
      .then((res) => {
        console.log(res);
        setListBanner(res.data.content);
        dispatch(endedLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(endedLoading());
      });
  }, []);

  return (
    <Carousel
      {...setting}
      //  afterChange={onChange}
    >
      {listBanner.map((item, index) => {
        return (
          <div key={index}>
            <img
              className="w-full h-[800px] object-cover"
              src={item.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
