import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;

  aside {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Location = styled.section`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;

  font-size: 0.875rem;
  line-height: 130%;

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ItemsQuantity = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["base-background"]};
  border-radius: 100%;
  padding: 0.25rem;

  ${fonts.textS}
  font-weight: bold;

  margin-left: -20px;
  margin-top: -29px;
`;
