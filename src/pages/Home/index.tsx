import { CoffeeCardProps, CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { CoffeeList, CoffeeListContainer } from './styles'

const data = await fetch('/src/db/coffees.json')
const coffeeCardsList: CoffeeCardProps[] = await data.json()

export function Home() {
  return (
    <>
      <Intro />
      <CoffeeListContainer>
        <h2>Nossos Cafés</h2>

        <CoffeeList>
          <ul className="ul-coffe">
            {coffeeCardsList.map((coffeeCard) => {
              return (
                <li key={coffeeCard.id}>
                  <CoffeeCard {...coffeeCard} />
                </li>
              )
            })}
          </ul>
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
