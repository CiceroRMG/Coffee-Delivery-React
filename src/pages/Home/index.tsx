import { useEffect, useState } from 'react'
import { CoffeeCardProps, CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { CoffeeList, CoffeeListContainer } from './styles'

export const coffeesList: CoffeeCardProps[] = [
  {
    id: '10',
    imgUrl: '/src/assets/expresso.svg',
    info: 'O tradicional café feito com água quente e grãos moídos',
    title: 'Expresso Tradicional',
    price: '4.50',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
    ],
  },
  {
    id: '20',
    imgUrl: '/src/assets/expressoCremoso.svg',
    info: 'Café expresso tradicional com espuma cremosa',
    title: 'Expresso Cremoso',
    price: '4.90',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
    ],
  },
  {
    id: '30',
    imgUrl: '/src/assets/americano.svg',
    info: 'Expresso diluído, menos intenso que o tradicional',
    title: 'Expresso Americano',
    price: '5.90',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
    ],
  },
  {
    id: '40',
    imgUrl: '/src/assets/coldCoffee.svg',
    info: 'Bebida preparada com café expresso e cubos de gelo',
    title: 'Expresso Gelado',
    price: '4.90',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'gelado',
      },
    ],
  },
  {
    id: '50',
    imgUrl: '/src/assets/milkCoffee.svg',
    info: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'Café com Leite',
    price: '6.50',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '60',
    imgUrl: '/src/assets/latteCoffee.svg',
    info: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'Latte',
    price: '7.00',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '70',
    imgUrl: '/src/assets/capuccino.svg',
    info: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'Capuccino',
    price: '7.50',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '80',
    imgUrl: '/src/assets/macchiato.svg',
    info: 'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'Macchiato',
    price: '8.90',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '90',
    imgUrl: '/src/assets/mochaccino.svg',
    info: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: 'Mochaccino',
    price: '8.90',
    tags: [
      {
        id: '1',
        content: 'tradicional',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '100',
    imgUrl: '/src/assets/hotChocolate.svg',
    info: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: 'Chocolate Quente',
    price: '9.90',
    tags: [
      {
        id: '1',
        content: 'especial',
      },
      {
        id: '2',
        content: 'com leite',
      },
    ],
  },
  {
    id: '110',
    imgUrl: '/src/assets/cubano.svg',
    info: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: 'Cubano',
    price: '9.90',
    tags: [
      {
        id: '1',
        content: 'especial',
      },
      {
        id: '2',
        content: 'alcoólico',
      },
      {
        id: '3',
        content: 'gelado',
      },
    ],
  },
  {
    id: '120',
    imgUrl: '/src/assets/havaiano.svg',
    info: 'Bebida adocicada preparada com café e leite de coco',
    title: 'Havaiano',
    price: '9.90',
    tags: [
      {
        id: '1',
        content: 'especial',
      },
    ],
  },
  {
    id: '130',
    imgUrl: '/src/assets/arabe.svg',
    info: 'Bebida preparada com grãos de café árabe e especiarias',
    title: 'Árabe',
    price: '9.90',
    tags: [
      {
        id: '1',
        content: 'especial',
      },
    ],
  },
  {
    id: '140',
    imgUrl: '/src/assets/irlandes.svg',
    info: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: 'Irlandês',
    price: '9.90',
    tags: [
      {
        id: '1',
        content: 'especial',
      },
      {
        id: '2',
        content: 'alcoólico',
      },
    ],
  },
]

export function Home() {
  const [coffeeCardsList, setCoffeeCardsList] = useState<CoffeeCardProps[]>([])

  useEffect(() => {
    setCoffeeCardsList(coffeesList)
  }, [])
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
