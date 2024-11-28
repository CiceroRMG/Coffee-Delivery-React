import styled from 'styled-components'

interface ItemProps {
  backgroundColor: BackgroundColors
}

export enum BackgroundColors {
    YELLOW_DARK = 'yellow-dark',
    YELLOW = 'yellow',
    GRAY = 'gray',
    PURPLE = 'purple'
  }

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/src/assets/backgroundIntro.svg');
  background-size: cover;
  background-position: center;
`
export const IntroContent = styled.div`
  max-width: 72rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 5.75rem 1rem;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const IntroInfosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const IntroTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const IntroItemsContent = styled.div`
  display: flex;
  gap: 2.5rem; // talvez mudar para space-between
  margin-bottom: 1rem;
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    border-radius: 999px;
    padding: 0.5rem;
    box-sizing: content-box;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => {
        switch (props.backgroundColor) {
            case BackgroundColors.YELLOW_DARK:
                return props.theme['yellow-700'];
            case BackgroundColors.YELLOW:
                return props.theme['yellow-500'];
            case BackgroundColors.GRAY:
                return props.theme['gray-700'];
            case BackgroundColors.PURPLE:
                return props.theme['purple-500'];
            default:
                return 'transparent';
            }
    }}
    }

    span {
        color: ${(props) => props.theme['gray-700']};
        line-height: 130%;
    }
`
