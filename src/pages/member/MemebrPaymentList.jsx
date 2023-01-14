import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import { user } from "../../redux/authReducer";

const MemebrPaymentList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const users = useSelector(user);
  const { id } = useParams();
  // const [sent, setSent] = useState(false);

  useEffect(() => {
    const func = async () => {
      const res = await axios.get(
        "http://localhost:5000/posts/getpayment/" + id
      );
      console.log("========---", res); //l
      setDatas(res.data);
    };
    func();
  }, []);
  const columns = [
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Note",
      dataIndex: "note",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (text) => <a>{new Date(text).toLocaleDateString()}</a>,
    },
    {
      title: "Approvement",
      dataIndex: "isActive",

      render: (text, row) =>
        text ? (
          <button
            style={{
              background: "green",
              color: "white",
              borderRadius: "8px",
              padding: "5px 10px",
            }}>
            Approved
          </button>
        ) : (
          <button
            onClick={async () => {
              console.log("hiloga", text, row);
              const res = await axios.patch(
                "http://localhost:5000/posts/payment/" + row._id,
                {
                  isActive: true,
                }
              );
              console.log("========---", res); //l
              // setSent(true);
              const dd = datas.map((data) => {
                if (data._id == row._id) {
                  return { ...data, isActive: true };
                } else return data;
              });
              setDatas(dd);
            }}>
            Approve
          </button>
        ),
    },
  ];

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
  return (
    <Container>
      <div>
        <Header />
      </div>
      <Body>
        <div className="member__top">
          <h2>Ag Grid with React</h2>
          {/* <span className="left_btns">
            {selectedRowKeys.length > 0 && (
              <button className="email__btn">Send Emial</button>
            )}
          </span> */}
        </div>
        <hr />
        {/* <p>Details Row Panel in AG Grid</p> */}
        <div className="ag-theme-material" style={{ height: 600 }}>
          <Table
            className="table"
            style={{ width: "90vw" }}
            rowSelection={rowSelection}
            columns={columns}
            rowKey={"_id"}
            pagination={{
              pageSize: 10,
            }}
            dataSource={datas}
          />
        </div>
      </Body>
    </Container>
  );
};
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

export default MemebrPaymentList;
