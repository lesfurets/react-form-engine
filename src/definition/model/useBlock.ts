import {useContext} from "react";
import {BlockContext} from "./BlockContext";

export const useBlock = () => useContext(BlockContext);