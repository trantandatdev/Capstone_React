import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { userServ } from "../../services/userServ";
import AddUser from "../AddUser/AddUser";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
const UserManager = () => {
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text, record, index) => {
        return <p>{index + 1}</p>;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Thao tác",
      key: "thaoTac",
      dataIndex: "taiKhoan",
      render: (text, record) => (
        <div className="space-x-2 xoa_sua">
          {/* Sửa */}
          <NavLink to={`/admin/edit-user/${text}`}>
            <button>
              <i className="px-3 py-2 bg-green-600 rounded-md fa-solid fa-pen" />
            </button>
          </NavLink>
          {/* Xóa */}
          <button
            onClick={() => {
              userServ
                .deleteUser(record.taiKhoan)
                .then(() => {
                  userServ.getAllUser().then((res) => {
                    setListUser(res.data.content);
                    setResFind(res.data.content);
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <i className="px-3 py-2 bg-red-600 rounded-md fa-solid fa-trash" />
          </button>
        </div>
      ),
    },
  ];
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    userServ
      .getAllUser()
      .then((res) => {
        setListUser(res.data.content);
      })
      .catch();
  }, []);
  const [resFind, setResFind] = useState([]);
  return (
    <div>
      {/* Add */}
      <NavLink to={`/admin/add-user`}>
        <button className="bg-blue-500 px-4 py-2 rounded-md font-medium">
          Thêm người dùng
        </button>
      </NavLink>
      {/* Find */}
      <div className="mt-3 mb-3">
        <Search setResFind={setResFind} />
      </div>
      {/* Table */}
      <h2 className="font-bold text-2xl mb-5">Danh sách người dùng</h2>
      <Table
        columns={columns}
        dataSource={resFind.length === 0 ? listUser : resFind}
        pagination={{
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default UserManager;
