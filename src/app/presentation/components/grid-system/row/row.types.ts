import { HTMLAttributes } from "react";
import { MarginExtensionProps } from "~/app/presentation/styles/modifiers/modifiers.types";
import { GridElementTypes } from "../grid-system.types";

export type RowType = Omit<HTMLAttributes<HTMLElement>, "form">;

export type RowSize = "1" | "2" | "3" | "4" | "5" | "6";

export type RowProps = {
  noGutters?: boolean;
  xs?: RowSize;
  sm?: RowSize;
  md?: RowSize;
  lg?: RowSize;
  xl?: RowSize;
  xxl?: RowSize;
  as?: GridElementTypes;
} & MarginExtensionProps &
  RowType;
