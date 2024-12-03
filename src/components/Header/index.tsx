import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { HeaderLayout, LocationContent, NavContainer } from './styles'
import { useContext } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

export function Header() {
  const { selectedCoffees } = useContext(CoffeeListContext)

  const coffesListLenght = selectedCoffees.length
  const isCoffeListVoid = coffesListLenght < 1

  return (
    <HeaderLayout>
      <NavLink to="/">
        <img src="/src/assets/logo.svg" alt="" />
      </NavLink>
      <NavContainer>
        <LocationContent>
          <MapPin weight="fill" size={22} />
          <span>Cidade</span>
        </LocationContent>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart weight="fill" size={22} />
          <span className="quantityOrdersAdded" hidden={isCoffeListVoid}>
            {coffesListLenght}
          </span>
        </NavLink>
      </NavContainer>
    </HeaderLayout>
  )
}
