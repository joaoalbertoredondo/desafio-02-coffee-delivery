import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 10rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    margin-bottom: 1rem;
    ${fonts.titleXS}
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 640px;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h3 {
    ${fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    ${fonts.textS}
  }
`;

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    padding: 0.75rem;
    border-radius: 4px;
    outline: none;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    ${fonts.textS}

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }

  input#sm {
    width: 200px;
  }

  input#uf {
    width: 60px;
  }

  input#cp {
    flex: 1;
  }

  input#ct {
    flex: 1;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 640px;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const PaymentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  h3 {
    ${fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    ${fonts.textS}
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  > button {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;

    padding: 1rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    border-radius: 6px;

    text-transform: uppercase;
    ${fonts.buttonM}

    > span {
      line-height: 0;
    }

    > svg {
      color: ${(props) => props.theme["purple"]};
    }

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  > .selected {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};

    &:hover {
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
    }
  }
`;

export const SelectedCoffees = styled.div`
  width: 448px;
  background: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 6px 44px;

  > button {
    background: ${(props) => props.theme.yellow};
    color: white;
    border-radius: 6px;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.75rem;

    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme["yellow-dark"]};
      transition: background-color 0.2s;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    margin-right: 1.25rem;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      color: ${(props) => props.theme["base-subtitle"]};
      ${fonts.textM}
    }

    > div {
      display: flex;
      gap: 0.5rem;

      > button {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        background: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme["base-text"]};
        border-radius: 6px;
        padding: 0.5rem;
        text-transform: uppercase;
        line-height: 0;

        ${fonts.buttonM}

        &:hover {
          background: ${(props) => props.theme["base-hover"]};
          transition: background-color 0.2s;
        }

        svg {
          color: ${(props) => props.theme["purple"]};
        }
      }
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  ${fonts.textM}
  font-weight: bold;
`;

export const Separator = styled.div`
  margin: 1.5rem 0;
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme["base-button"]};
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      ${fonts.textS}
    }

    span:last-child {
      ${fonts.textM}
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    span {
      ${fonts.textL}
      font-weight: bold;

      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
