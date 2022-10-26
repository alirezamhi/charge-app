import React, { useContext } from "react";
import { PhoneContext } from "../../context/PhoneProvider";
import { ReduceAction } from "../../reduce/ReduceAction";
import mci from "../../images/mci.png";
import irc from "../../images/irc.png";
import rtl from "../../images/rtl.png";
import "./Operator.css";

const Operator = () => {
  const { value, dispatch } = useContext(PhoneContext);
  // console.log(value.operator);
  return (
    <div className="btn-group m-3">
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: ReduceAction.CHANEGE_OPERATOR,
            payload: { operator: "رایتل" },
          });
        }}
      >
        <img src={rtl} className="rtl_image" />
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: ReduceAction.CHANEGE_OPERATOR,
            payload: { operator: "ایرانسل" },
          });
        }}
      >
        <img src={irc} className="irc_image" />
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: ReduceAction.CHANEGE_OPERATOR,
            payload: { operator: "همراه اول" },
          });
        }}
      >
        <img src={mci} className="mci_image" />
      </button>
    </div>
  );
};

export default Operator;
