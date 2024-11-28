import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AmountContainer,
  CoffeeCardContainer,
  PriceAndAmountContainer,
  PriceContent,
  TagsContainer,
} from './styles'

interface Tag {
  content: string
  id: string
}

export interface CoffeeCardProps {
  id: string
  imgUrl: string
  tags: Tag[]
  title: string
  info: string
  price: string
}

export function CoffeeCard({
  imgUrl,
  tags,
  title,
  info,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={imgUrl} alt="" />

      <TagsContainer>
        <ul>
          {tags.map((tag) => {
            return <li key={tag.id}>{tag.content.toUpperCase()}</li>
          })}
        </ul>
      </TagsContainer>

      <h3>{title}</h3>

      <p>{info}</p>

      <PriceAndAmountContainer>
        <PriceContent>
          <span className="moneyTag">R$</span> {price}
        </PriceContent>

        <AmountContainer>
          <input type="number" step={1} min={1} max={12} placeholder="0" />
          <button title="Adicionar ao carrinho">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </AmountContainer>
      </PriceAndAmountContainer>
    </CoffeeCardContainer>
  )
}