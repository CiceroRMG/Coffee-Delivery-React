import styled from 'styled-components'

export const HeaderLayout = styled.header`
  max-width: 72rem;
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;
`
export const NavContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  a {
    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
  }
`
export const LocationContent = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['purple-300']};
  border-radius: 6px;

  span {
    font-size: 0.875rem;
    display: inline-block;
    vertical-align: middle;
    padding-top: 0.1rem;
  }
`
