import React from "react";
import { MDBContainer } from "mdbreact";

export const About = () => {
  return (
    <div>
      <h2>
        <b> GIỚI THIỆU </b>
      </h2>
      <p style={{ fontStyle: "italic" }}>Họ tên: Phạm Đức Quý</p>
      <p style={{ fontStyle: "italic" }}>MSSV: 46.01.104.149</p>
      <p style={{ fontStyle: "italic" }}>Ngày sinh: 20/3/2002</p>
      <img src="/duc_quy.jpg" alt="Quý" width="300" />
    </div>
  );
};
