import styled from "styled-components";

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
