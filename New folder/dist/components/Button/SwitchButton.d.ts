import React from "react";
import { ButtonProps } from "./types";
import { DefaultTheme } from "styled-components";
export declare const StyledButton: import("styled-components").StyledComponent<"button", DefaultTheme, {
    theme: DefaultTheme;
}, never>;
declare const SwitchButton: <E extends React.ElementType<any> = "button">(props: ButtonProps<E>) => JSX.Element;
export default SwitchButton;
