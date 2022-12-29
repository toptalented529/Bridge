import React from "react";
export declare const StyledAddressBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../..").TextProps, never>;
export declare const StyledBold: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
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
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
