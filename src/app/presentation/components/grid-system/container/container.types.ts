import { HTMLAttributes } from "react";
import { MarginExtensionProps } from "~/app/presentation/styles/modifiers/modifiers.types";
import { GridElementTypes } from "../grid-system.types";

export type ContainerProps = {
  as?: GridElementTypes;
} & MarginExtensionProps &
  HTMLAttributes<HTMLDivElement>;
