/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet29766990"?: PrimitiveOverrideProps<TextProps>;
    "Consectetur adipiscing29766991"?: PrimitiveOverrideProps<TextProps>;
    "Elit sed do eiusmod29766992"?: PrimitiveOverrideProps<TextProps>;
    "Tempor incididunt ut labore"?: PrimitiveOverrideProps<TextProps>;
    "Et dolore magna"?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet29766996"?: PrimitiveOverrideProps<TextProps>;
    "Consectetur adipiscing29766997"?: PrimitiveOverrideProps<TextProps>;
    "Elit sed do eiusmod29766998"?: PrimitiveOverrideProps<TextProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
