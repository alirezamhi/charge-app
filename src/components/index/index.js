import React from "react";
import Operator from "../Operator/Operator";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import ShowPrice from "../Price/ShowPrice";
import Pill from "../Pill/Pill";
import "./index.component.css";

const index = () => {
  return (
    <div className="index d-flex align-items-center justify-content-center rounded">
      <div className="pill bg-primary p-3">
        <h2>فاکتور نهایی</h2>
        <hr />
        <Pill></Pill>
        <button className="btn btn-danger">خرید</button>
      </div>
      <div className="buy bg-white p-3">
        <h2>خرید شارژ </h2>
        <hr />
        <div className="d-flex align-items-center justify-content-center">
          <PhoneNumber></PhoneNumber>
        </div>
        <Operator></Operator>
        <ShowPrice></ShowPrice>
      </div>
    </div>
  );
};

export default index;
