import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  align-items: center;
  width: 16rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }

  h3 {
    color: ${(props) => props.theme['gray-800']};
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    padding-top: 1rem;
    padding-bottom: 0.4rem;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    padding-bottom: 2rem;
  }

  .dialog {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`
export const TagsContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 0.25rem;
  }

  ul li {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    display: flex;
    padding: 0.25rem 0.5rem;
    padding-top: 0.45rem;
    margin-top: 0.5rem;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
  }
`

export const PriceAndAmountContainer = styled.div`
  display: flex;
  gap: 1.45rem;
  align-items: center;
`
export const PriceContent = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};
  padding-top: 0.5rem;

  .moneyTag {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const AmountContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    background-color: ${(props) => props.theme['gray-400']};
    padding: 0.5rem;
    border: none;
    text-align: center;
    border-radius: 6px;

    justify-content: center;
    gap: 0.25rem;
  }

  & > button {
    background-color: ${(props) => props.theme['purple-700']};
    border: none;
    color: ${(props) => props.theme.white};
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    gap: 0.5rem;
    cursor: pointer;

    transition: background 0.25s;
  }

  & > button:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`
