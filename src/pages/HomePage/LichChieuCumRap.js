import React, { useEffect, useState } from "react";
import { Collapse, Tabs } from "antd";
import { quanLyRapSer } from "../../services/quanLyRapSer";
import "./lichChieuCumRap.css";
import moment from "moment";
import ButtonTime from "../../components/ButtonTime/ButtonTime";
import { Link } from "react-router-dom";
import "./responsiveListTab.css";

const LichChieuCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    // CGV
    // BHDStar
    quanLyRapSer
      .getInfoShowTimesTheater(maHeThongRap)
      .then((res) => {
        console.log(res);
        setCumRap(res.data.content[0]?.lstCumRap);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maHeThongRap]);

  return (
    <div className="cum_rap">
      <div className="cum_rap_big">
        <Tabs
          defaultActiveKey="1"
          style={{
            height: 400,
          }}
          tabPosition={"left"}
          items={cumRap.map((item, index) => {
            return {
              // thuộc tính label tạo nội dung cho các nút tab
              label: (
                <div className="text-left space-y-1 w-80">
                  <h4 className="truncate text-lime-500 uppercase font-medium ">
                    {item.tenCumRap}
                  </h4>
                  <p className="truncate text-xs text-gray-400 uppercase">
                    {item.diaChi}
                  </p>
                  <p className="text-xs text-red-500">[Chi tiết]</p>
                </div>
              ),
              // key là khoá của tab, giúp cho một số chức năng sau này cần biết đang đứng ở tab nào
              key: index,
              // disabled giúp ngăn chặn người dùng bấm mở tab nếu giá trị là true
              // disabled: true,
              // children giúp hiển thị nội dung của tab mà chúng ta muốn
              children: (
                <div>
                  {item.danhSachPhim.map((item, index) => {
                    return (
                      <div className="flex p-5">
                        <div className="w-2/12">
                          <img
                            className="object-cover h-56 border border-black shadow-md"
                            src={item.hinhAnh}
                            alt=""
                          />
                        </div>
                        <div className="w-10/12 px-5">
                          <div>
                            <h3 className="mb-3 text-lg font-bold">
                              <span className="text-white p-1 bg-orange-600 rounded mr-2">
                                C18
                              </span>
                              {item.tenPhim}
                            </h3>
                          </div>
                          <div className="grid grid-cols-2 gap-5">
                            {item.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((movieTime, index) => (
                                <div key={index} className="m-0 mr-4 mb-4">
                                  <Link to={`tickets/${movieTime.maLichChieu}`}>
                                    <ButtonTime movieTime={movieTime} />
                                  </Link>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ),
            };
          })}
        />
      </div>
      <div className="cum_rap_small">
        <Collapse
          items={cumRap.map((item, index) => {
            return {
              label: (
                <div className="text-left space-y-1 w-80">
                  <h4 className="truncate text-lime-500 uppercase font-medium ">
                    {item.tenCumRap}
                  </h4>
                  <p className="truncate text-xs text-gray-400 uppercase">
                    {item.diaChi}
                  </p>
                  <p className="text-xs text-red-500">[Chi tiết]</p>
                </div>
              ),
              key: index,
              children: (
                <div>
                  {item.danhSachPhim.map((item, index) => {
                    return (
                      <div className="flex p-5 div_2_small">
                        <div className="w-5/12">
                          <img
                            className="object-cover border border-black shadow-md"
                            src={item.hinhAnh}
                            alt=""
                          />
                        </div>
                        <div className="w-7/12 px-5">
                          <div>
                            <h3 className="mb-3 text-sm font-bold">
                              <span className="text-white p-1 bg-orange-600 rounded mr-2">
                                C18
                              </span>
                              {item.tenPhim}
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 content_time_movie">
                            {item.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((movieTime, index) => (
                                <div key={index} className="mb-4">
                                  <Link to={`tickets/${movieTime.maLichChieu}`}>
                                    <ButtonTime movieTime={movieTime} />
                                  </Link>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default LichChieuCumRap;
