import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select, message } from "antd";

import { useNavigate, Link } from "react-router-dom";
import { userServ } from "../../services/userServ";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormRegister = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    userServ
      .register(values)
      .then((result) => {
        message.success("Đăng ký thành công");
        navigate("/login");
      })
      .catch((err) => {
        message.error("Đăng ký thất bại");
        console.log(err);
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
        <Option value="89">+89</Option>
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "+84",
      }}
      style={{
        width: 500,
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h2 className="text-5xl text-blue-500 font-bold text-center mb-5">
        Đăng ký
      </h2>
      <Form.Item
        name="hoTen"
        label="Họ và tên"
        rules={[
          {
            required: true,
            message: "Nhập tên của bạn",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="taiKhoan"
        label="Tài khoản"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tài khoản",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Email không chính xác",
          },
          {
            required: true,
            message: "Vui lòng nhập E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Nhập lại "
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Vui lòng xác nhận mật khẩu",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không trùng khớp"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="soDt"
        label="Số ĐT"
        rules={[
          {
            required: true,
            message: "Nhập số điện thoại",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="bg-blue-500 mr-2">
          Đăng ký
        </Button>
        hoặc{" "}
        <Link to="/login" className="text-blue-700">
          đăng nhập ngay!
        </Link>
      </Form.Item>
    </Form>
  );
};
export default FormRegister;
