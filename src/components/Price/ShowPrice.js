import React, { useContext } from "react";
import { PhoneContext } from "../../context/PhoneProvider";
import { addCommas } from "@persian-tools/persian-tools";
import { ReduceAction } from "../../reduce/ReduceAction";

const ShowPrice = () => {
  const { value, dispatch } = useContext(PhoneContext);
  let arr = [];
  if (value?.operator === "ایرانسل") {
    arr = ["10000", "20000", "50000", "100000", "200000"];
  }
  if (value?.operator === "رایتل") {
    arr = ["10000", "20000", "50000", "100000", "200000"];
  }
  if (value?.operator === "همراه اول") {
    arr = ["50000", "100000", "200000", "500000", "1000000"];
  }
  console.log(value);
  return (
    <div className="btn-group">
      {arr.map((item, index) => {
        return (
          <button
          className="btn btn-secondary"
            onClick={() =>
              dispatch({
                type: ReduceAction.PRICE_BUTTON,
                payload: { price: item },
              })
            }
            key={index}
          >
            {addCommas(item)}
          </button>
        );
      })}
    </div>
  );
};

export default ShowPrice;
