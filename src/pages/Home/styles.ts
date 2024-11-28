import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`

export const CoffeeList = styled.div`
  .ul-coffe {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    list-style: none;
  }

  .ul-coffe > li {
    margin-bottom: 1rem;
  }

  .ul-coffe:last-child {
    margin-bottom: 4rem;
  }
`
