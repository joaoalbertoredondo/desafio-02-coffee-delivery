import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }
`;
