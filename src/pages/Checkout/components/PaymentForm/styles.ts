import styled from 'styled-components'

export const PaymentFormDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const LocationInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem;
`
export const LocationInfoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme['gray-900']};

    font-family: Roboto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  .textHeader {
    display: flex;
    flex-direction: column;

    & span {
      color: ${(props) => props.theme['gray-700']};

      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`
export const LocationInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  input {
    display: flex;
    padding: 0.75rem;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme['gray-400']};
    background: ${(props) => props.theme['gray-300']};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme['purple-500']};
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  .cepInput {
    max-width: 12.5rem;
  }

  .numberAndComplementDivInputs {
    display: flex;
    gap: 0.75rem;

    & .houseNumberInput {
      max-width: 12.5rem;
    }

    & .complementInput {
      flex: 1;
      position: relative;
    }

    & .complementInput::after {
      position: absolute;
      content: 'Opcional';
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      color: black;
    }
  }

  .districtAndCityAndUFDivInputs {
    display: flex;
    gap: 0.75rem;

    & .districtInput {
      max-width: 12.5rem;
    }

    & .cityInput {
      flex: 1;
    }

    & .ufInput {
      max-width: 3.75rem;
    }
  }
`