import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  ul {
    list-style: none;
  }
`
export const FormDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  & > h3 {
    color: ${(props) => props.theme['gray-800']};

    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`
export const FormConfirmOrderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .formTitle {
    color: ${(props) => props.theme['gray-800']};

    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const FormConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  max-width: 28rem;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;

  .selectedCoffeesList {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1.5rem;

    li {
      padding-bottom: 1.5rem;
      border-bottom: 2px solid ${(props) => props.theme['gray-400']};
    }
  }
`
export const CoffeSelectedInfosContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  align-items: flex-start;
  justify-content: space-between;

  .priceTag {
    color: ${(props) => props.theme['gray-700']};
    text-align: right;
    font-weight: 700;
    line-height: 130%;
  }
`

export const CoffeInfosContent = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeInfosAmountAndDelete = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['gray-800']};
  line-height: 130%;
  gap: 0.5rem;

  .amountAndDeleteInputs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    .trashButton {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;

      border: none;
      border-radius: 0.375rem;
      background: ${(props) => props.theme['gray-400']};

      svg {
        color: ${(props) => props.theme['purple-500']};
      }

      span {
        color: ${(props) => props.theme['gray-700']};
        line-height: 160%;
        text-transform: uppercase;
        font-size: 0.75rem;
      }
    }
  }

  .trashButton:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
`
export const TotalAndConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .confirmButton {
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    cursor: pointer;
    text-decoration: none;

    border-radius: 0.375rem;
    background: ${(props) => props.theme['yellow-500']};
    border: 1px solid transparent;

    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    transition: background 0.15s;
  }

  .confirmButton:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
export const TotalPriceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .totalPriceInfo {
    color: ${(props) => props.theme['gray-800']};

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }

  span {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-700']};
    line-height: 130%;

    .infoDescription {
      font-size: 0.875rem;
    }
  }
`
