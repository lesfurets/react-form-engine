import * as React from "react";
import {ThemeContext, ThemeContextInterface} from "./ThemeContext";

export const useTheme = () => React.useContext<ThemeContextInterface>(ThemeContext);