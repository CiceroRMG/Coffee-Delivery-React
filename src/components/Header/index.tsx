import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { HeaderLayout, LocationContent, NavContainer } from './styles'

export function Header() {
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
        </NavLink>
      </NavContainer>
    </HeaderLayout>
  )
}
