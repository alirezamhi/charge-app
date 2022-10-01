import React, { useContext, useEffect, useState } from "react";
import { PhoneContext } from "../../context/PhoneProvider";
import { ReduceAction } from "../../reduce/ReduceAction";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notify } from "../notify/Notify";

const PhoneNumber = () => {
  const [inputValue, SetInputValue] = useState("");
  const { value, dispatch } = useContext(PhoneContext);
  function clickHandler() {
    dispatch({
      type: ReduceAction.ENTER_PHONE,
      payload: { number: inputValue },
    });
  }
  // value.isError&&Notify("شماره معتبر نیست","error")

  return (
    <div className="input-group w-75">
      <button onClick={clickHandler} className="btn btn-success">
        <i className="bi bi-check-lg"></i>
      </button>
      <input
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
        className="form-control "
        maxLength={11}
      />
      <ToastContainer/>
    </div>
  );
};

export default PhoneNumber;
