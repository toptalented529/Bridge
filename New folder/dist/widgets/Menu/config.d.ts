import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        icon: string;
        label: string;
        href: string;
    }[];
    calloutClass: string;
})[];
export declare const socials: {
    label: string;
    icon: string;
    href: string;
}[];
export declare const MENU_HEIGHT = 90;
export declare const MENU_ENTRY_HEIGHT = 40;
export declare const MENU_SUB_ENTRY_HEIGHT = 40;
export declare const SIDEBAR_WIDTH_FULL = 270;
export declare const SIDEBAR_WIDTH_REDUCED = 60;
