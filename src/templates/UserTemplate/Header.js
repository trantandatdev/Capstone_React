import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../utils/local";
import "./responsiveUserTemplate.css";
const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  console.log(user);
  const handleNavigate = () => {
    const lichchieurapElement = document.getElementById("lichchieurap");

    if (lichchieurapElement) {
      lichchieurapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="bg-yellow-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 content_nav"
        aria-label="Global"
      >
        {/* logo */}
        <div>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="https://www.sacvang.com/data/02/logo-hang-phim-10.jpg" className="h-20 w-auto" alt="Movie Logo" />
          </a>
        </div>
        
        {/* Nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "text-red-500" : "";
            }}
            to={"/"}
          >
            Trang chủ
          </NavLink>
          <NavLink to={"/cum-rap"}>Cụm rạp</NavLink>
          <NavLink to={"/tin-tuc"}>Tin tức</NavLink>
          <NavLink to={"/"} onClick={handleNavigate}>
            Đặt vé
          </NavLink>
        </div>
        {/* Button */}
        <div className="grid grid-cols-2">
          {/* Đăng nhập */}
          <div className="hidden lg:flex lg:flex-1 items-center">
            {/* nếu người dùng chưa đăng nhập sẽ hiển thị login còn nếu đã đăng nhập sẽ hiển thị tên người dùng */}
            <div
              style={{
                backgroundColor: "#9e9e9e",
                padding: 4,
                borderRadius: 50,
                marginRight: 10,
              }}
            >
              <div className="relative w-7 h-7 overflow-hidden rounded-full">
                <svg
                  className="absolute w-9 h-9 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {user ? (
              <p>{user.hoTen}</p>
            ) : (
              <Link
                to={"/login"}
                href="#"
                className="text-base font-semibold leading-6"
                style={{
                  color: "#9e9e9e",
                }}
              >
                Đăng nhập
              </Link>
            )}
          </div>
          {/* Đăng ký */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            {/* nếu người dùng chưa đăng nhập sẽ hiển thị login còn nếu đã đăng nhập sẽ hiển thị tên người dùng */}
            <div
              style={{
                backgroundColor: "#9e9e9e",
                padding: 4,
                borderRadius: 50,
                marginRight: 10,
              }}
            >
              <div className="relative w-7 h-7 overflow-hidden rounded-full">
                <svg
                  className="absolute w-9 h-9 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {user ? (
              <button
                onClick={() => {
                  logout();
                }}
              >
                Đăng xuất
              </button>
            ) : (
              <Link
                to={"/register"}
                href="#"
                className="text-base font-semibold leading-6"
                style={{
                  color: "#9e9e9e",
                }}
              >
                Đăng ký
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
