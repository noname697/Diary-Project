import { ReactElement } from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  min-height: 80.5vh;
`;

const Container = ({ children }: { children: ReactElement }) => {
  return <DivContainer>{children}</DivContainer>;
};

export default Container;
