//import "./App.css";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { DATA } from "./data";
import DeatailsComponent from "./details";
import { HeaderAdmin } from "../../components/header/HeaderAdmin";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getMembers } from "../../redux/memberReducer";
import { Table, Modal, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Username",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
  },
  {
    title: "Member Type",
    dataIndex: "memberType",
  },
  {
    title: "Employ Type",
    dataIndex: "employ_type",
  },
  {
    title: "year",
    dataIndex: "year",
  },
  {
    title: "company name",
    dataIndex: "year",
  },
  {
    title: "Job Title",
    dataIndex: "job_title",
  },
  {
    title: "Graduate date",
    dataIndex: "graduate_date",
  },
  {
    title: "Residence Address",
    dataIndex: "residence_address",
  },
  {
    title: "Benefit Type",
    dataIndex: "benefitType",
  },
  {
    title: "Organization",
    dataIndex: "organization",
  },
  {
    title: "Business",
    dataIndex: "business",
  },
];

function Memberlist() {
  const [gridApi, setGridApi] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  // const rowData = DATA;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("=================================================");

    dispatch(getMembers()).then((res) => {
      console.log("pppppppppppp", res);
      if (res.type == "member/get/fulfilled") {
        setUsers(res.payload.user);
      }
    });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const handleSnedEmail = async () => {
    console.log(selectedRowKeys);
    const res = await axios.post("http://localhost:5000/members/sendEmail", {
      ids: selectedRowKeys,
      content: content,
    });
    setIsModalOpen(false);
    setContent("");
    console.log("res", res);
  };
  return (
    <Con>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        footer={[
          <button
            onClick={handleSnedEmail}
            className="email__btn"
            style={{
              backgroundColor: "#127912",
              color: "white",
              padding: " 7px 20px",
              borderRadius: "8px",
              border: " 1px solid white",
            }}>
            Send
          </button>,
        ]}
        onOk={handleOk}
        onCancel={handleCancel}>
        <TextArea onChange={(e) => setContent(e.target.value)} rows={4} />
      </Modal>
      <Container className="App">
        <HeaderAdmin />

        <Body>
          <div className="member__top">
            <h2>Ag Grid with React</h2>
            <span className="left_btns">
              {selectedRowKeys.length > 0 && (
                <button onClick={showModal} className="email__btn">
                  Send Emial
                </button>
              )}
              <Link to={"/addmember"} className="email__a">
                AddMember
              </Link>
            </span>
          </div>
          <hr />
          {/* <p>Details Row Panel in AG Grid</p> */}
          <div className="ag-theme-material" style={{ height: 600 }}>
            <Table
              scroll={{
                x: "100vw",
              }}
              className="table"
              style={{ width: "90vw" }}
              rowSelection={rowSelection}
              columns={columns}
              rowKey={"_id"}
              dataSource={users}
            />
          </div>
        </Body>
      </Container>
    </Con>
  );
}

const Body = styled.div`
  width: 92vw;
  margin: auto;
  h2 {
    color: gray;
    font-size: 25px;
    font-weight: normal;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  hr {
    margin-bottom: 30px;
  }
`;
const Container = styled.div`
  /* width: 92vw; */
  .left_btns {
    display: flex;
    gap: 15px;
  }
  .email__btn {
    background-color: #127912;
    color: white;
    padding: 7px 20px;
    border-radius: 8px;
    border: 1px solid white;
  }
  .email__a {
    background-color: #127912;
    color: white;
    display: block;
    padding: 7px 20px;
    border-radius: 8px;
    border: 1px solid white;
  }
  .member__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Con = styled.div`
  /* width: 92vw; */

  .email__btn {
    background-color: #127912;
    color: white;
    padding: 7px 20px;
    border-radius: 8px;
    border: 1px solid white;
  }
`;

export default Memberlist;
