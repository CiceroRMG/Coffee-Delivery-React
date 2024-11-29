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
