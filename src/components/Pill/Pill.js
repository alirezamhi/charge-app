import React, { useContext, useEffect } from "react";
import { PhoneContext } from "../../context/PhoneProvider";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { ReduceAction } from "../../reduce/ReduceAction";


const Pill = () => {
  const { value , dispatch } = useContext(PhoneContext);
  function finallyPrice(price) {
     return value?.price*.09
  }
  console.log(value);
  useEffect(()=>{
    if(!value.phoneNumber&&!value.operator&&!value.price){
      dispatch({type:ReduceAction.IS_ERROR})
    }
  },[value.phoneNumber,value.operator,value.price])
  return (
    
    <div>
      <p>{`شماره موبایل مقصد${value?.phoneNumber?digitsEnToFa(value.phoneNumber):""}`}</p>
      <p>{`اپراتور${value.operator?value.operator:""}`}</p>
      <p>{`قیمت شارژ${value.price?digitsEnToFa(value.price):""}`}</p>
      <p>{`قیمت نهایی${value.price?digitsEnToFa(+value.price+finallyPrice(value.price)):""}`}</p>
    </div>
  );
};

export default Pill;
