import { DefaultTheme } from "styled-components";
import { Colors } from "../../../theme/types";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
export interface LinkLabelProps {
    isPushed?: boolean;
    active?: boolean;
    theme?: DefaultTheme;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, LinkLabelProps, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../../components/Text").TextProps & {
    color: keyof Colors;
}, never>;
export { MenuEntry, LinkStatus, LinkLabel };
