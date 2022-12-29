import React from "react";
import { Login, Config } from "./types";
interface Props {
    walletConfig: Config;
    login: Login;
    onDismiss: () => void;
    mb: string;
}
export declare const StyledButton: import("styled-components").StyledComponent<{
    <E extends React.ElementType<any> = "button">(props: import("../..").ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps, never>;
declare const WalletCard: React.FC<Props>;
export default WalletCard;
