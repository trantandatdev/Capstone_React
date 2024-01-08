import React from "react";
import "./register.css";
import Header from "../../templates/UserTemplate/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="register">
        <div
          className="container p-9 rounded"
          style={{
            transform: "translate(0%,25%)",
            width: "25%",
          }}
        >
          <div
            style={{
              marginLeft: "45%",
            }}
          >
            <i
              className="fa-solid fa-lock"
              style={{
                alignItems: "center",
                backgroundColor: "red",
                padding: 10,
                borderRadius: 50,
                color: "white",
              }}
            />
          </div>
          <h1 className="text-center text-2xl">Đăng ký</h1>
          {/* Tài khoản */}
          <div className="relative float-label-input">
            <input
              type="text"
              placeholder=" "
              className="block bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
              Tài khoản *
            </label>
          </div>
          {/* Mật khẩu */}
          <div className="relative float-label-input">
            <input
              type="password"
              placeholder=" "
              className="block bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            />
            
            <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
              Mật khẩu *
            </label>
          </div>
          {/* Nhập lại mật khẩu */}
          <div className="relative float-label-input">
            <input
              type="password"
              placeholder=" "
              className="block bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
              Nhập lại mật khẩu *
            </label>
          </div>
          {/* Họ tên */}
          <div className="relative float-label-input">
            <input
              type="text"
              placeholder=" "
              className="block bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
              Họ tên *
            </label>
          </div>
          {/* Email */}
          <div className="relative float-label-input">
            <input
              type="text"
              placeholder=" "
              className="block bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
              Email *
            </label>
          </div>
          <button className="rounded border border-red-500 bg-gradient-to-r from-red-600 to-red-900 hover:border-red-900 py-3 px-9 w-full text-white">
            Đăng kí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
