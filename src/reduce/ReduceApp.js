import React from 'react';
import { ReduceAction } from './ReduceAction';
import { phoneNumberDetail } from "@persian-tools/persian-tools";
import { phoneNumberValidator } from "@persian-tools/persian-tools";


const ReduceApp = (state,action) => {
    switch (action.type) {
        case ReduceAction.ENTER_PHONE:
            if(phoneNumberValidator(action.payload.number)){
                return{...state,phoneNumber:action.payload.number,operator:phoneNumberDetail(action.payload.number).operator,price: '',isErrorPhone:false}
            }else if(!phoneNumberValidator(action.payload.number)){
                return{...state,isErrorPhone:true}
            }
        case ReduceAction.CHANEGE_OPERATOR:
            return{...state,operator:action.payload.operator}
        case ReduceAction.PRICE_BUTTON:
            return{...state,price:action.payload.price}
        case ReduceAction.IS_ERROR:
            if(!state.phoneNumber||!state.operator||!state.price){
                return {...state,isErrorAll:true}    
              }else{
                return{...state,isErrorAll:false}
              }
        default:
            break;
    }
};

export default ReduceApp;