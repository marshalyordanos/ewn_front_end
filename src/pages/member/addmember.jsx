import React, { useState } from "react";
import "../login/login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";
// import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Header } from "../../components/header/Header";
import styled from "styled-components";
import {
  CloseOutlined,
  ConsoleSqlOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { DatePicker, Input, Select, Form, Button, Alert, Modal } from "antd";
export const Addmember = () => {
  const [urls, setUrls] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [residence_address, setResidence_address] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberType, setMemberType] = useState("");
  const [benefitType, setBenefitType] = useState("");

  const [employ_type, setEmploy_type] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [job_title, setJob_title] = useState("");
  const [year, setYear] = useState("");
  const [business, setBusiness] = useState("");
  const [organization, setOrganization] = useState("");
  const [graduate_date, setGraduate_date] = useState("");
  const [error, setError] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values);
    const formData = new FormData();

    formData.append("email", email);
    formData.append("username", name);
    formData.append("residence_address", residence_address);
    formData.append("phone", phone);
    formData.append("benefitType", benefitType);
    formData.append("memberType", memberType);
    formData.append("graduate_date", graduate_date);
    formData.append("employ_type", employ_type);
    formData.append("year", year);
    formData.append("company_name", company_name);
    formData.append("job_title", job_title);
    formData.append("business", business);
    formData.append("organization", organization);
    formData.append("photo", photo);
    formData.append("password", password);

    try {
      const res = await axios.post(
        "http://localhost:5000/members/addmember",
        formData
      );
      // console.log("--------------0000000-------", res);
      res.data && window.location.replace("/");
    } catch (error) {
      setError(error?.response?.data?.message);
      setIsModalOpen(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle sub mit ------------");
    setError(false);
  };
  const handleMemberChange = (value) => {
    setMemberType(value);
    console.log(`selected ${value}`);
  };
  const handleBenefitChange = (value) => {
    setBenefitType(value);
    console.log(`selected ${value}`);
  };
  const handleEmployChange = (value) => {
    setEmploy_type(value);
    console.log(`selected ${value}`);
  };
  const handleBusinessChange = (value) => {
    console.log(`selected ${value}`);
    setBusiness(value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setOrganization(value);
  };
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    setGraduate_date(dateString);
  };
  // const onClose = (e) => {
  //   console.log(e, "I was closed.");
  //   setError("");
  // };
  const handleOk = () => {
    setIsModalOpen(false);
    setError("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setError("");
  };
  return (
    <Container>
      <Header />
      {error && (
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Alert message={error} type="error" closable />
        </Modal>
      )}
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Become a Member</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Become a Member</li>
            </ol>
          </div>
        </div>
      </section>
      <div className="addmember__cons">
        <div className="container">
          <h3>Register</h3>
          <h1>EWiEn MEMBERSHIP APPLICATION FORM</h1>
          <Form
            className="container"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Row className="g-2 row_5">
              <Col md px-2 p-4 py-1>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="username "
                  />
                </Form.Item>
              </Col>
              <Col md px-2 p-4 py-1>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="NaEmail addressme "
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className="g-2  row_5">
              <Col md>
                <Form.Item
                  name="residence"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}>
                  <Input
                    // name=""

                    onChange={(e) => setResidence_address(e.target.value)}
                    placeholder="Residence Address "
                  />
                </Form.Item>
              </Col>
              <Col md>
                <Form.Item name="phone">
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number "
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className="g-2  row_5">
              <Col md>
                <Form.Item name="password">
                  <Input.Password
                    // name=""
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password "
                  />
                </Form.Item>
              </Col>
              <Col md>
                {" "}
                <Form.Item
                  name="benefit"
                  rules={[
                    {
                      required: true,
                      message: "Please input your benefit package!",
                    },
                  ]}>
                  <Select
                    placeholder="Select one benefit package"
                    // style={{ width: 120 }}
                    onChange={handleBenefitChange}
                    options={[
                      {
                        value: "student_package",
                        label: "Student package (free)",
                      },
                      {
                        value: "basic_package ",
                        label: "Basic package",
                      },
                      {
                        value: "premium_package",
                        label: "Premium package",
                      },
                      {
                        value: "honorary_package",
                        label: "Honorary package",
                      },
                      {
                        value: "silver_level ",
                        label: "Silver level organization package ",
                      },
                      {
                        value: "gold_level",
                        label: "Gold level organization package",
                      },
                      {
                        value: "dimond_level ",
                        label: "Dimond level organization package ",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row className="g-2 row_5">
              <Col md>
                {urls && (
                  <DisplayImageCon>
                    <img src={urls} alt="noimage" className="image" />
                    <div className=" absolute top-0  right-0 z-20">
                      <button
                        onClick={() => {
                          setUrls(null);
                        }}>
                        <CloseOutlined style={{ color: "white" }} />
                      </button>
                    </div>
                  </DisplayImageCon>
                )}
                {!urls && (
                  <div className="addmember__photoUpload">
                    <label htmlFor="photo">
                      <PlusOutlined />
                      <p>Upload</p>
                    </label>
                    <Form.Item name="file">
                      <input
                        onChange={(e) => {
                          setUrls(URL.createObjectURL(e.target.files[0]));
                          setPhoto(e.target.files[0]);
                        }}
                        style={{ display: "none" }}
                        type="file"
                        name="photo"
                        id="photo"
                      />
                    </Form.Item>
                  </div>
                )}
              </Col>
              <Col md>
                <div>
                  <Form.Item
                    name="membership"
                    rules={[
                      {
                        required: true,
                        message: "Please input your benefit membership type!",
                      },
                    ]}>
                    <Select
                      placeholder="Select a membership type"
                      // style={{ width: 120 }}
                      onChange={handleMemberChange}
                      options={[
                        {
                          value: "member",
                          label: "Member",
                        },
                        {
                          value: "partnering",
                          label: "Partnering",
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>

            {memberType == "member" && (
              <>
                <Row className="g-2">
                  <Col md>
                    <DatePicker
                      style={{ marginTop: 0, padding: "15px 10px", height: 50 }}
                      placeholder="Graduation date:"
                      id="date__piker"
                      onChange={onDateChange}
                    />
                  </Col>
                  <Col md>
                    <Form.Item
                      name="employment"
                      rules={[
                        {
                          required: true,
                          message: "Please input your employment status!",
                        },
                      ]}>
                      <Select
                        placeholder="Select a employment status"
                        // style={{ width: 120 }}
                        onChange={handleEmployChange}
                        options={[
                          {
                            value: "employed",
                            label: "Employed",
                          },
                          {
                            value: "unemployed",
                            label: "Unemployed",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="g-2 row_5">
                  <Col md>
                    <Form.Item
                      name="year"
                      rules={[
                        {
                          required: true,
                          message: "Please input your experience !",
                        },
                      ]}>
                      <Input
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Years of work experience: "
                      />
                    </Form.Item>
                  </Col>
                  <Col md>
                    <Input
                      onChange={(e) => setCompany_name(e.target.value)}
                      placeholder="Company Name "
                    />
                  </Col>
                </Row>
                <Row className="g-2 row_5">
                  <Col md>
                    <Input
                      onChange={(e) => setJob_title(e.target.value)}
                      placeholder="Job class:  "
                    />
                  </Col>
                  <Col md></Col>
                </Row>
              </>
            )}
            {memberType == "partnering" && (
              <>
                <Row className="g-2">
                  <Col md>
                    <Select
                      mode="multiple"
                      allowClear
                      placeholder="Select all  business class that best describes"
                      // style={{ width: 120 }}
                      onChange={handleBusinessChange}
                      options={[
                        {
                          value: "government",
                          label: "Government",
                        },
                        {
                          value: "private_sector",
                          label: "Private sector",
                        },
                        {
                          value: "NGOs",
                          // disabled: true,
                          label: "NGOs",
                        },
                        {
                          value: "educational_institute",
                          label: "Educational institute",
                        },
                        {
                          value: "international_organizations",
                          label: "International organizations",
                        },
                      ]}
                    />
                  </Col>
                  <Col md>
                    <Select
                      mode="multiple"
                      allowClear
                      placeholder="Select all fits organization"
                      // style={{ width: 120 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "0il_and_gas",
                          label: "Oil and Gas",
                        },
                        {
                          value: "renewable",
                          label: "Renewable",
                        },
                        {
                          value: "nuclear",
                          // disabled: true,
                          label: "Nuclear",
                        },
                        {
                          value: "on-grid_Power",
                          label: "On-grid Power",
                        },
                        {
                          value: "off-grid_power",
                          label: "Off-grid Power",
                        },
                        {
                          value: "transport",
                          label: "Transport",
                        },
                        {
                          value: "heating",
                          label: "Heating",
                        },
                        {
                          value: "generation",
                          label: "Generation",
                        },
                        {
                          value: "transmission",
                          label: "Transmission",
                        },
                        {
                          value: "distribution",
                          label: "Distribution",
                        },
                        {
                          value: "retail",
                          label: "Retail",
                        },
                        {
                          value:
                            "organization_doesn’t_operate_in_the_energy_sector",
                          label:
                            "Organization doesn’t operate in the energy sector",
                        },
                      ]}
                    />
                  </Col>
                </Row>
              </>
            )}
            {/* <div className="addmember_btn"> */}
            {/* <Form.Item> */}
            <button
              htmlType="submit"
              style={{ width: 400, marginBottom: 30 }}
              className="row_5 button btn bg-success container   ">
              Register
            </button>
            {/* </Form.Item> */}
            {/* </div> */}

            {/* <Row className="g-2">
              <Col md>
                <span>Areas of expertise</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setExpertis_area(e.target.value)}
                />
              </Col>
              <Col md>
                <span>Areas of interest</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setInterest_area(e.target.value)}
                />
              </Col>
            </Row> */}

            {/* <Row className="g-2">
              <Col md>
                <span>SIGNATURE AND DECLARATION *</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setSignature(e.target.value)}
                />
              </Col>
              <Col md>
                <button
                  type="submit"
                  className="button btn bg-success container md-15 px-2 p-4 py-1">
                  Register
                </button>
              </Col>
            </Row> */}
          </Form>
          {error && <span>Someting went wrong</span>}
        </div>
      </div>
    </Container>
  );
};

const DisplayImageCon = styled.div`
  border: 1px solid orange;
  position: relative;
  width: 130px;
  height: 130px;

  .image {
    width: 130px;
    height: 130px;
    object-fit: cover;
  }
  button {
    background-color: rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 0px;
    right: 0px;
  }
`;
const Container = styled.div`
  .breadcrumbs {
    margin-top: 20px;
  }
  .addmember__cons {
    margin-top: 20px;
    margin-bottom: 20px;
    h3 {
      /* margin-left: 30px; */
      width: 94.5%;
      margin: auto;

      font-size: 30px;
      font-weight: 200;
      margin-bottom: 10px;
    }
    h1 {
      width: 94.5%;
      margin: auto;
      font-weight: lighter;
      font-size: 23px;
      margin-bottom: 20px;
    }
  }
  .addmember__photoUpload label {
    border: 1px dashed lightgray;
    padding: 20px 40px;
    border-radius: 10px;
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .addmember__photoUpload label:hover {
    background-color: whitesmoke;
  }
  #addmember__member {
    margin-top: 20px;
  }
  #addmember__member * {
    padding: 10px 0 !important;
    margin: 10px;
  }
  .ant-picker {
    margin-top: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-picker * {
    margin: 0;
    padding: 0;
  }
  .ant-select {
    margin-top: 0px;
    /* height: 40px; */
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    justify-content: center;
  }
  .ant-select * {
    margin: 0;
    padding: 0px 0px 0px 2px;
  }

  .ant-select-selector {
    display: flex;
    padding: 25px !important;
    /* height: 40px; */
    flex: 1;

    align-items: center;
  }
  .ant-select-multiple .ant-select-selector {
    padding: 0 !important;
  }
  .row_5 {
    margin-top: 10px;
  }
  .addmember_btn {
    /* display: flex;
    justify-content: end; */
  }
  .ant-input-password {
    display: flex;
    align-items: center;
  }
  .ant-input-password * {
    margin: 0;
    padding: 0;
  }
`;
