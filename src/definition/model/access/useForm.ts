import {useContext} from "react";
import {FormContext} from "./FormContext";

export const useForm = () => useContext(FormContext);