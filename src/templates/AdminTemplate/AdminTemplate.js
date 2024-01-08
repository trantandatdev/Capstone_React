import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./responsiveAdminTemplate.css";
const AdminTemplate = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  useEffect(() => {
    // // kiểm tra người dùng nếu không phải admin sẽ đá người dùng về trang google hoặc bất kì trang bạn muốn
    // if (user) {
    //   if (user.maLoaiNguoiDung != "QuanTri") {
    //     window.location.href = "https://www.google.com/";
    //   }
    // } else {
    //   // chưa đăng nhập nên không có dữ liệu trên redux
    //   navigate("./login");
    // }
  }, [location.pathname]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Header, Sider, Content } = Layout;
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          // lấy location từ hook useLocation để kiểm tra xem người dùng đang đứng ở component nào để active nút menu
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/admin/manager-user",
              icon: <UserOutlined />,
              label: <Link to={"/admin/manager-user"}>Quản lý người dùng</Link>,
            },
            {
              key: "/admin",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/admin"}>Quản lý phim</Link>,
            },
            {
              key: "/admin/add-movie",
              icon: <VideoCameraOutlined />,
              label: <Link to={"/admin/add-movie"}>Thêm phim</Link>,
            },
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
