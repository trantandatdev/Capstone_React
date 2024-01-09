import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userServ } from "../../services/userServ";
import { validationUser } from "../../utils/validationUser";
import './responsiveAddUser.css'
const AddUser = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
      hoTen: "",
      maNhom: "GP08",
    },
    onSubmit: (values) => {
      userServ
        .addUser(values)
        .then((res) => {
          console.log(res)
          setTimeout(() => {
            navigate("/admin/manager-user");
          });
        })
        .catch((err) => {});
    },
    validationSchema: validationUser,
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = formik;

  return (
    <div className="px-20 content_form">
      <h2 className="font-bold text-2xl mb-5">Thêm người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 form_design">
          {/* Tài khoản */}
          <div>
            <label
              htmlFor="taiKhoan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tài khoản
            </label>
            <input
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoan}
            />
            {errors.taiKhoan && touched.taiKhoan ? (
              <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
            ) : null}
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            ) : null}
          </div>
          {/* Mật khẩu */}
          <div>
            <label
              htmlFor="matKhau"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="matKhau"
              name="matKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.matKhau}
            />
            {errors.matKhau && touched.matKhau ? (
              <p className="text-red-500 text-xs mt-1">{errors.matKhau}</p>
            ) : null}
          </div>
          {/* Số điện thoại */}
          <div>
            <label
              htmlFor="soDt"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="soDt"
              name="soDt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDt}
            />
            {errors.soDt && touched.soDt ? (
              <p className="text-red-500 text-xs mt-1">{errors.soDt}</p>
            ) : null}
          </div>
          {/* Họ tên */}
          <div>
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
            {errors.hoTen && touched.hoTen ? (
              <p className="text-red-500 text-xs mt-1">{errors.hoTen}</p>
            ) : null}
          </div>
          {/* Loại người dùng */}
          <div>
            <div>
              <label
                htmlFor="maLoaiNguoiDung"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Loại người dùng
              </label>
              <select
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maLoaiNguoiDung}
              >
                <option selected value="">
                  Chọn loại người dùng
                </option>
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
              {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (
                <p className="text-red-500 text-xs mt-1">
                  {errors.maLoaiNguoiDung}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <div>
            <NavLink to={`/admin/manager-user`}>
              <button
                style={{
                  borderBottom: "2px solid #3F83F8",
                }}
              >
                <i className="fa-solid fa-angles-left text-blue-500" />
                <span className="text-blue-500">Trở lại</span>
              </button>
            </NavLink>
          </div>
          <div>
            <button className="bg-blue-500 px-4 py-2 rounded-md font-medium">
              Thêm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
