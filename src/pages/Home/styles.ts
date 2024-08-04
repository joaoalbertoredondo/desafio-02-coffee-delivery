import styled from "styled-components";
import background from "../../assets/Background.png";
import { fonts } from "../../styles/fonts";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  background: url(${background});
  padding: 5.875rem 10rem;

  img {
    width: 476px;
    height: 360px;
  }
`;

export const Heading = styled.div`
  h1 {
    ${fonts.titleXL}
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    ${fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Items = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 40px;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  svg {
    border-radius: 100%;
    padding: 0.5rem;
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    ${fonts.textM}
  }
`;

export const CoffeeList = styled.div`
  padding: 1rem 10rem;

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    ${fonts.titleL}
  }
`;
