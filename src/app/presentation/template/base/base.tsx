import { Col, Row } from "~/app/presentation/components";
import * as S from "./base-styles";

export type Props = {
  children?: React.ReactNode;
  pageTitle?: string;
};

const Base = ({ children, pageTitle }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Base;
