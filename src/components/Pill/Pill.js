import React, { useContext } from "react";
import { PhoneContext } from "../../context/PhoneProvider";

const Pill = () => {
  const { value } = useContext(PhoneContext);
  function finallyPrice(price) {
     return value?.price*.09
  }
  return (
    
    <div>
      <p>{`شماره موبایل مقصد${value?.phoneNumber?value.phoneNumber:""}`}</p>
      <p>{`اپراتور${value.operator?value.operator:""}`}</p>
      <p>{`قیمت شارژ${value.price?value.price:""}`}</p>
      <p>{`قیمت نهایی${value.price?+value.price+finallyPrice(value.price):""}`}</p>
    </div>
  );
};

export default Pill;
