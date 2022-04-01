import { GETALL, GETBYID } from "../types/Index";
import { Axios } from "axios";
import { URL_BASE } from "../config";

let res1 = await Axios.get(`${URL_BASE}cliente}`), json1 = await res1.nombre;
//let res1 = await Axios.get(`${URL_BASE}cliente}`), json1 = await res1.nombre;

export const getAll = () => ({type : GETALL, payload: json1});