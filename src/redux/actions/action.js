import {GET_WHEATHER_FAIL,GET_WHEATHER_SUCCESS,WHEATHER_LOAD} from "../constants/constant"
import axios from "axios"
export const getWheather=(query)=>async dispatch=>{
dispatch({type:WHEATHER_LOAD})
try {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1731ca5619fc4430a9885719210309&q=${query}&days=10&aqi=no&alerts=no`);
dispatch({type:GET_WHEATHER_SUCCESS,payload:response.data})
} catch (error) {
    dispatch({type:GET_WHEATHER_FAIL,payload:error})
}
}