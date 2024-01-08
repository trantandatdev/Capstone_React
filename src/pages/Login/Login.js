import React from "react";
import * as login from "./../../assets/animation/login.json";
import Lottie from "react-lottie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userServ } from "../../services/userServ";
import { message } from "antd";
import { saveLocalStore } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveInfoUser } from "../../redux/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        console.log(values);
        userServ
          .loginServ(values)
          .then((res) => {
            console.log(res);
            // thông báo thành công
            messageApi.open({
              type: "success",
              content: "Đăng nhập thành công",
            });
            // lưu thông tin người dùng
            saveLocalStore(res.data.content, "user_info");
            dispatch(saveInfoUser(res.data.content));
            // chuyển hướng người dùng tới trang chủ
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })
          .catch((err) => {
            // lỗi không đăng nhập đc
            console.log(err);
            messageApi.open({
              type: "error",
              content: err.response.data.content,
            });
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
        matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {contextHolder}
      <div className="h-screen flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col_left">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col_right">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-bold text-3xl">Đăng nhập Movie</h2>
                <div>
                  <label
                    htmlFor="taiKhoan"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tài khoản
                  </label>
                  <input
                    type="text"
                    id="taiKhoan"
                    name="taiKhoan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Vui lòng nhập tài khoản"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.taiKhoan}
                  />
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.taiKhoan}
                    </p>
                  ) : (
                    <p className="invisible text-xs mt-1">{errors.taiKhoan}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="matKhau"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="matKhau"
                    name="matKhau"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Vui lòng nhập mật khẩu"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.matKhau}
                  />
                  {errors.matKhau && touched.matKhau ? (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.matKhau}
                    </p>
                  ) : (
                    <p className="invisible text-xs mt-1">{errors.matKhau}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-5 bg-black text-white rounded-md hover:bg-opacity-70 duration-500"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
