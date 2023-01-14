import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import { Button, Checkbox, Form, Input } from "antd";
import { user } from "../../redux/authReducer";
import axios from "axios";
import { useSelector } from "react-redux";
const Payment = () => {
  const users = useSelector(user);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await axios.post(
      "http://localhost:5000/posts/payment/" + users._id,
      values
    );
    console.log("========---", res);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      <div>
        <Header />
      </div>
      <div className="con">
        <div className="image_con">
          <img src={"/images/payment.jpg"} alt="" />
        </div>
        <div className="form">
          <Form
            form={form}
            initialValues={{
              remember: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input type="number" placeholder="Price" />
            </Form.Item>

            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input placeholder="note" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .con {
    display: flex;
    align-items: center;
    .form {
      display: flex;
      justify-content: center;
      flex: 1;
      form {
        background-color: transparent;
        border: none;
        margin: 0 20px;
        width: 80%;
      }
    }
  }
  .image_con {
    img {
      width: 50vw;
      height: 75vh;
      object-fit: cover;
    }
  }
`;

export default Payment;
