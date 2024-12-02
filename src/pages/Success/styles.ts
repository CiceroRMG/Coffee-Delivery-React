import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  padding: 2rem 1rem;
  padding-top: 5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SuccessHeader = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const SuccessMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.38rem;
`
export const SuccessInfosContent = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  border-radius: 0.375rem 2.25rem;
  background: inherit;
  z-index: 1;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px; /* Ajuste conforme necessário */
    background: linear-gradient(45deg, #dbac2c, #8047f8);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
  }
`
export const InfoContent = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme.white};
    border-radius: 62.5rem;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    box-sizing: content-box;
  }

  .dollarImg {
    background: ${(props) => props.theme['yellow-700']};
  }

  .mapImg {
    background: ${(props) => props.theme['purple-500']};
  }

  .timerImg {
    background: ${(props) => props.theme['yellow-500']};
  }
`
export const InfoTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme['gray-700']};
  font-size: 1rem;
  font-style: normal;
  line-height: 130%;
`
