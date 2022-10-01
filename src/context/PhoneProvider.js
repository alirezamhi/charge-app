//import file
import React, { useReducer } from "react";
import ReduceApp from "../reduce/ReduceApp";

//context file
//--------------------------------------------------------
export const PhoneContext = React.createContext();
const PhoneProvider = ({ children }) => {
  let initialValue = {
    phoneNumber: "",
    operator: "",
    price: "",
    isError: false,
  };
  const [value, dispatch] = useReducer(ReduceApp, initialValue);
  return (
    <div>
      <PhoneContext.Provider value={{ value, dispatch }}>
        {children}
      </PhoneContext.Provider>
    </div>
  );
};

export default PhoneProvider;
