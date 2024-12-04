import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Image, Toast, NavBar,Button, Mask } from "antd-mobile";

const SelectImage: React.FC = () => {
   const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(false)

  // 图片数据
  const images = [
    { id: 1, src: "cat.webp", alt: "猫" },
    { id: 2, src: "flower1.webp", alt: "玫瑰" },
    { id: 3, src: "flower2.webp", alt: "郁金香" },
    { id: 4, src: "f3.webp", alt: "猫" },
    { id: 5, src: "f4.webp", alt: "向日葵" },
    { id: 6, src: "f5.webp", alt: "雏菊" },
  ];

  // 选择图片事件
  const handleSelect = (id: number) => {
    setSelected(id);
    const selectedImage = images.find((img) => img.id === id);
    // Toast.show({
    //   content: `你选择了: ${selectedImage?.alt}`,
    //   duration: 1000,
    // });
  };

   // 确定按钮事件
  const handleConfirm = () => {
    if (selected === 1) {
      setVisible(true)
      setTimeout(() => {
          navigate("/newlogin"); // 跳转到验证页面
      },1000)
    } else {
      return
    }
  };

  return (
    <div style={{  minHeight: "100vh",padding:'10px' }}>
      {/* 顶部导航 */}
      <NavBar back={null} className="selectImage"  style={{ background: "#1677ff", color: "#fff"}}>选择最符合描述的图片</NavBar>

      {/* 标题 */}
          <div style={{
              padding: "5px 20px 10px 20px",
              background: "#1677ff",
              color: "#fff",
              fontSize: "18px",
              textAlign:'left'
          }}>
        <strong>“一只猫”</strong>
      </div>

      {/* 图片网格 */}
      <div style={{ position: "relative" }} id="grid-container">
        <Grid  columns={3} gap={2} style={{ margin: "6px 0" }}>
        {images.map((img) => (
          <Grid.Item key={img.id}>
            <div
              style={{
                position: "relative",
                border: selected === img.id ? "2px solid #1677ff" : "2px solid transparent",
                        overflow: "hidden",
                        height: "120px",
                background:selected ===img.id ? "rgba(0,0,0,.3)" :'unset'
              }}
              onClick={() => handleSelect(img.id)}
            >
              <Image src={img.src} alt={img.alt} style={{ width: "100%", height: "100%" }} />
              {selected === img.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "25px",
                    height: "25px",
                    background: "#1c45cc",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                            <span style={{ color: "#fff", fontSize: "14px" }}>
                                <img src="right.png" width={20} alt="" />
                  </span>
                </div>
              )}
            </div>
          </Grid.Item>
        ))}
        </Grid> 
         {/* Mask 挂载到 Grid 容器上 */}
        <Mask
          visible={visible}
          onMaskClick={() => setVisible(false)}
          getContainer={() => document.getElementById("grid-container")!}
           color='rgba(242, 239, 240, 0.8)'
          style={{position:'absolute'}}
        >
          <div style={{ color: "#63c83b", textAlign: "center" }}>
            <div style={{margin:'60px 0'}}>
              <img src="sucess.png" alt="" width={55} height={55} style={{background:'#fff',borderRadius:'50%'}} />
               <p style={{fontWeight:'bold'}}>验证成功 ！</p>
            </div>
            
          </div>
        </Mask>
      </div>
     
          
          <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0px",
          borderTop: "1px solid #f0f0f0",
          background: "#fff",
        }}
      >
        {/* 我不会 */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <span style={{ fontSize: "20px", color: "#888", }}>
                      <img src="wheelchair.png" alt="" width={30} />
          </span>
          <span style={{ fontSize: "14px", color: "#888", marginRight: "10px" }}>我不会</span>
        </div>

        {/* 问号 */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <span style={{ fontSize: "20px", color: "#888", marginRight: "10px" }}>
                      <img src="question-circle.png" width={23} alt="" />
          </span>
        </div>

        {/* 换一组 */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
                  <span style={{ fontSize: "20px", color: "#888", marginRight: "5px" }}>
                      <img src="refresh.png" width={20} alt="" />
          </span>
          <span style={{ fontSize: "14px", color: "#888" }}>换一组</span>
        </div>

        {/* 确定按钮 */}
        <Button
          color="primary"
          size="small"
          style={{ borderRadius: "4px", marginLeft: 'auto' }}
           onClick={handleConfirm} // 绑定确定功能
        >
          确定
        </Button>
      </div>

     
     
    </div>
  );
};

export default SelectImage;