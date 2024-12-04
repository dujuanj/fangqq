import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import "./Login.css";

const Login: React.FC = () => {
    const navigate = useNavigate();
  const onFinish = (values: { username: string; password: string }) => {
    console.log("表单数据: ", values);
    if (values) {
      console.log('aaaaa')
        navigate("/validate"); // 跳转到验证页面
     }
  };

  return (
    <div className="login-container">
          {/* QQ Logo */}
          <div className="top">
              <div className="back-arrow">
                  <img src="back-arrow.png" alt="" />
              </div>
          </div>
      <div className="login-logo">
        <span className="qq-logo">QQ<span style={{ color: "#77BDFB" }}>9</span></span>
      </div>

      {/* 登录表单 */}
      <Form onFinish={onFinish} className="login-form">
        {/* 用户名输入框 */}
        <Form.Item
          name="username"
          className="input_wrap"
          rules={[{ required: true, message: "请输入用户名！" }]}
        >
          <Input
            prefix={<UserOutlined className="input-icon" />}
            placeholder="请输入用户名"
            size="large"
          />
        </Form.Item>

        {/* 密码输入框 */}
        <Form.Item
          name="password"
          className="input_wrap"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password
            prefix={<EyeInvisibleOutlined className="input-icon" />}
            placeholder="请输入密码"
            size="large"
            iconRender={(visible) =>
              visible ? <CloseOutlined /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        {/* 登录按钮 */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button" block>
            登录
          </Button>
        </Form.Item>

        {/* 协议 */}
        <div className="login-agreement">
          <Checkbox /> &nbsp;
          我已阅读并同意 <a href="#">服务协议</a> 和 <a href="#">QQ隐私保护指引</a>
        </div>
      </Form>

      <div className="bottom-menu">
        <div className="menu-item">
          <div className="menu-icon">
            <img src="phone.png" alt="" />
          </div>
          <p className="menu-label">手机号登录</p>
        </div>
        <div className="menu-item">
          <div className="menu-icon userimg">
            <img src="user.png" alt="" />
          </div>
          <p className="menu-label">其他方式登录</p>
        </div>
        <div className="menu-item userimg">
          <div className="menu-icon">
            <img src="add.png" alt="" />
          </div>
          <p className="menu-label">注册</p>
        </div>
        <div className="menu-item">
          <div className="menu-icon">⋯</div>
          <p className="menu-label">更多</p>
        </div>
      </div>
    </div>
  )
};

export default Login;