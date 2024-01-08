import React, { useEffect, useState } from "react";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk } from "../../redux/slice/movieSlice";
import './responsiveMovieManager.css'
const MovieManager = () => {
  const dispatch = useDispatch();
  const { listMovie } = useSelector((state) => state.movieSlice);
  // const [listMovie, setListMovie] = useState([]);
  console.log(listMovie);
  const columns = [
    {
      // title là tên cột
      title: "Mã phim",
      // dataIndex giúp bắt đc thuộc tính cần lấy dữ liệu của phần tử trong mảng
      dataIndex: "maPhim",
      key: "maPhim",
      // đầu tiên là nội dung, tiếp theo là cả phần tử, cuối cùng vị trí phần tử
      // render: (text, record, index) => {},
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (url) => {
        return <img className="w-20" src={url} />;
      },
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô tả",
      key: "moTa",
      dataIndex: "moTa",
      render: (text) => {
        return <p className="w-56 line-clamp-2">{text}</p>;
      },
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, record) => {
        return (
          <div className="space-x-3 xoa_sua">
            <button
              onClick={() => {
                quanLyPhimSer
                  .deleteMovie(record.maPhim)
                  .then(() => {
                    // gọi render lại phim khi đã xoá
                    quanLyPhimSer.getAllMovie().then((res) => {
                      // setListMovie(res.data.content);
                      dispatch(getAllMovieThunk());
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="text-white bg-red-500 py-2 px-4 rounded-md"
            >
              Xóa
            </button>
            <button className="text-white bg-yellow-500 py-2 px-4 rounded-md">
              Sủa
            </button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    // quanLyPhimSer
    //   .getAllMovie()
    //   .then((res) => {
    //     console.log(res);
    //     setListMovie(res.data.content);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(
      getAllMovieThunk({
        hoTen: "Dong",
        gioiTinh: "Nam",
      })
    );
  }, []);
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Danh sách phim</h2>
      <Table
        columns={columns}
        dataSource={listMovie}
        pagination={{
          // pageSize giúp giới hạn số phần tử trên mỗi trang
          pageSize: 5,
          // current giúp người dùng tới trang mà người dùng muốn
          // current: 1,
          // total
        }}
      />
    </div>
  );
};

export default MovieManager;
