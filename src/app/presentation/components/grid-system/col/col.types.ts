import { MarginExtensionProps } from "~/app/presentation/styles/modifiers/modifiers.types";
import { KeysofSpacing } from "~/app/presentation/styles/theme/spacing";
import { GridAttributesTypes, GridElementTypes } from "../grid-system.types";

export type ColSize =
  | "auto"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type offsetSize =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11";

export type JustifyType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type AlignItemsType =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export type ComplexType = {
  size?: ColSize;
  offset?: offsetSize;
  gx?: KeysofSpacing;
  gy?: KeysofSpacing;
};

export type ColProps = {
  xs?: ColSize | ComplexType;
  sm?: ColSize | ComplexType;
  md?: ColSize | ComplexType;
  lg?: ColSize | ComplexType;
  xl?: ColSize | ComplexType;
  xxl?: ColSize | ComplexType;
  offset?: offsetSize;
  gx?: KeysofSpacing;
  gy?: KeysofSpacing;
  justifyContent?: JustifyType;
  alignItems?: AlignItemsType;
  as?: GridElementTypes;
} & GridAttributesTypes &
  MarginExtensionProps;
