import React, { useContext, useEffect, useState } from "react";
import { PhoneContext } from "../../context/PhoneProvider";
import { ReduceAction } from "../../reduce/ReduceAction";

const PhoneNumber = () => {
  const [inputValue, SetInputValue] = useState("");
  const { value, dispatch } = useContext(PhoneContext);
  function clickHandler() {
    dispatch({
      type: ReduceAction.ENTER_PHONE,
      payload: { number: inputValue },
    });
  }

  return (
    <div className="w-75">
      <div className="input-group ">
        <button onClick={clickHandler} className="btn btn-success">
          <i className="bi bi-check-lg"></i>
        </button>
        <input
          value={inputValue}
          onChange={(e) => SetInputValue(e.target.value)}
          className="form-control "
          maxLength={11}
        />
      </div>
      {value.isErrorPhone ? (
        <span className="text-danger m-2">شماره را درست وارد کنید</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default PhoneNumber;
