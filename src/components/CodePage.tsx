import React, { useState } from "react";
import { Grid, Input, Button, Toast, NavBar } from "antd-mobile";

const SmsVerification: React.FC = () => {
  const [values, setValues] = useState<string[]>(Array(6).fill(""));

  // 输入事件
  const handleInputChange = (value: string, index: number) => {
    const newValues = [...values];
    newValues[index] = value.slice(0, 1); // 确保单个字符
    setValues(newValues);

    // 自动聚焦到下一个输入框
    if (value && index < 5) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = () => {
    const code = values.join("");
    if (code.length === 6) {
      Toast.show({
        content: `验证码：${code}`,
        duration: 2000,
      });
    } else {
      Toast.show({
        content: "请输入完整验证码",
        duration: 2000,
      });
    }
  };

  return (
    <div style={styles.container}>
      <NavBar style={{ marginTop: '20px' }} />
      <div style={styles.wrap}>
          {/* 标题 */}
      <h3 style={styles.title}>输入短信验证码</h3>
        <p style={styles.subtitle}>已向
          <span style={styles.phone}>+86 13********1</span>
           发送验证码</p>
        
  {/* 验证码输入框 */}
      <Grid columns={6} gap={8}>
        {values.map((value, index) => (
          <Input
            key={index}
            id={`input-${index}`}
            value={value}
            onChange={(e) => handleInputChange(e, index)}
            maxLength={1}
            style={styles.inputBox}
            type="number"
          />
        ))}
      </Grid>
 {/* 倒计时和其他方式 */}
      <p style={styles.resendText}>
        <span style={{ color: "#888" }}>重新发送 (58)</span>
        </p>
       


      </div>
    

    

     

      

      {/* 其他验证方式 */}
      <p style={styles.footer}>
        无法接收短信？
        <a href="#" style={styles.link}>
          尝试其他验证方式
        </a>
      </p>
    </div>
  );
};

export default SmsVerification;

// 样式对象
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
  },
  wrap:{
    paddingLeft: '35px',
    paddingRight:'35px'
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
  },
  inputBox: {
    height: "50px",
    width: "40px",
    textAlign: "center",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "18px",
    textAlignLast:'center'
  },
  resendText: {
    textAlign: "left",
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  button: {
    marginTop: "20px",
    borderRadius: "8px",
    fontSize: "16px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#1677ff",
    textDecoration: "none",
  },
  phone: {
    color:'#333'
  }
};