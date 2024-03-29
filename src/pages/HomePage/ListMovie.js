import { Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { endedLoading, startedLoading } from "../../redux/slice/loadingSlice";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";
import "./responsiveListTab.css";
const ListMovie = () => {
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startedLoading());
    quanLyPhimSer
      .getAllMovie()
      .then((res) => {
        setMovie(res.data.content);
        dispatch(endedLoading());
      })
      .catch((err) => {
        message.error(err.response.data);
        dispatch(endedLoading());
      });
  }, []);

  return (
    <div className="max-w-screen-xl py-10 mx-auto px-12 lg:px-0">
      <h2 className="text-3xl font-bold mb-7">Danh sách phim</h2>
      <div className="grid lg:grid-cols-4 gap-7 md:grid-cols-2 grid-cols-1">
        {/* Movie Item */}
        {movie.map((item, index) => {
          return (
            <div
              className="mb-3 movie_item flex flex-col justify-between"
              key={index}
            >
              <div>
                <img
                  src={item.hinhAnh}
                  alt={item.maPhim}
                  className="object-cover w-full h-72"
                />
                <div className="text">
                  <h3 className="mt-5 mb-3 text-xl font-bold h-14 line-clamp-2">
                    <span className="px-2 py-1 mr-3 text-sm text-white bg-orange-600 rounded-md">
                      {item.maNhom}
                    </span>
                    {item.tenPhim}
                  </h3>
                  <p className="line-clamp-3">{item.moTa}</p>
                </div>
              </div>
              <NavLink
                to={`/detail/${item.maPhim}`}
                className="inline-block w-full mt-3"
              >
                <Button type="primary" danger className="w-full h-10 text-lg">
                  Xem Ngay
                </Button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
