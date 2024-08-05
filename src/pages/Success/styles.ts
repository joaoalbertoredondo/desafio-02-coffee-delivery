import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const SuccessContainer = styled.main`
  padding: 5rem 10rem;
`;

export const Box = styled.section`
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.75rem;
  }
`;

export const BoxHeader = styled.div`
  h1 {
    ${fonts.titleL}
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    ${fonts.textL};
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 0.25rem;
  }
`;

export const Details = styled.div`
  width: 526px;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(
      ${(props) => props.theme["base-background"]},
      ${(props) => props.theme["base-background"]}
    ),
    linear-gradient(
      135deg,
      ${(props) => props.theme["yellow"]},
      ${(props) => props.theme["purple"]}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  svg {
    padding: 0.5rem;
    border-radius: 100%;
  }

  > div {
    margin: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      gap: 0.75rem;

      > div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
