import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 0.5rem;
  border: none;
  text-align: center;
  border-radius: 6px;

  justify-content: center;
  gap: 0.25rem;

  button {
    border: none;
    background: transparent;

    color: ${(props) => props.theme['purple-500']};
    display: flex;
    padding: 0rem 0.2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
