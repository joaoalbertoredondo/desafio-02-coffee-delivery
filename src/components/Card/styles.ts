import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const CardContainer = styled.div`
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  width: 256px;
  height: 310px;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    margin-top: -40px;
  }

  h1 {
    ${fonts.titleS}
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
  }

  p {
    ${fonts.textS}
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const Tags = styled.span`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;

  > span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    text-transform: uppercase;

    ${fonts.tag}
  }
`;

export const Control = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  span:first-child {
    ${fonts.textS}
  }

  span:last-child {
    ${fonts.titleM}
  }
`;

export const Order = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  > button {
    display: flex;

    color: ${(props) => props.theme["base-card"]};
    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 0.5rem;
  }
`;
