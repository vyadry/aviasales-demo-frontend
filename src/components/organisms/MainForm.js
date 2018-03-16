import React from "react";
import styled from "styled-components";
import { lg, sd } from "../../prop";
import FormBlock from "../molecules/FormBlock";
import TitlesBlock from "../molecules/TitlesBlock";
import BigButton from "../atoms/BigButton";
const Main = styled.div`
  margin-top: calc(31vh - 41px);
  @media (max-width: ${lg}px) {
    margin-top: calc(21vh - 41px);
  }
  @media (max-width: ${sd}px) {
    margin-top: calc(16.9vh - 41px);
  }
`;

export default () => (
  <Main>
    <TitlesBlock/>
    <FormBlock/>
    <BigButton>Найти билеты</BigButton>
  </Main>
);
