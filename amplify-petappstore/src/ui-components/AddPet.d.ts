/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPetOverridesProps = {
    AddPet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider29766917?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36582684?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36582691?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36582698?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29766925?: PrimitiveOverrideProps<DividerProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
    Button36582707?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
    prop?: Pet;
} & {
    overrides?: AddPetOverridesProps | undefined | null;
}>;
export default function AddPet(props: AddPetProps): React.ReactElement;
