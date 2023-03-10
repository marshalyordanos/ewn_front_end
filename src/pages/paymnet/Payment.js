import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import { Alert, Button, Checkbox, Form, Input, Modal } from "antd";
import { user } from "../../redux/authReducer";
import axios from "axios";
import { useSelector } from "react-redux";
const Payment = () => {
  const users = useSelector(user);
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);

  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);
    const data = new FormData();
    data.append("image", file);
    data.append("note", values.note);
    data.append("price", values.price);
    console.log("ooooooo----", values, file);
    const res = await axios.post(
      "http://localhost:5000/posts/payment/" + users._id,
      data
    );
    console.log("========---", res);
    setIsModalOpen(true);

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    // setError("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    // setError("");
  };

  return (
    <Container>
      <Modal
        title="payment successfully"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Alert
          message={"The payment is successfully paid!"}
          type="success"
          closable
        />
      </Modal>
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
                  message: "Please input your price!",
                },
              ]}>
              <Input type="number" placeholder="Price" />
            </Form.Item>

            <Form.Item name="note">
              <Input placeholder="Bank" />
            </Form.Item>
            {file && (
              <img width={200} src={URL.createObjectURL(file)} alt="images" />
            )}
            <div>
              <label className="upload_lable" htmlFor="inputfile">
                Upload Payment method
              </label>

              <input
                type="file"
                id="inputfile"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

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
  .upload_lable {
    border: 1px solid lightgray;
    padding: 10px 20px;
    margin: 10px 0;
    background-color: green;
    color: white;
  }
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
