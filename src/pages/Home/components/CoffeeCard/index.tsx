import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AmountContainer,
  CoffeeCardContainer,
  PriceAndAmountContainer,
  PriceContent,
  TagsContainer,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { useState } from 'react'

interface Tag {
  content: string
  id: string
}

interface CoffeOnList {
  id: string
  quantity: number
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
  id,
  imgUrl,
  tags,
  title,
  info,
  price,
}: CoffeeCardProps) {
  const [value, setValue] = useState(1)
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeOnList[]>([])

  function changeValue(valueChanged: number) {
    setValue(valueChanged)
  }

  function handleAddCoffeToList() {
    const newAddedCoffe = {
      id,
      quantity: value,
    }

    setSelectedCoffees([...selectedCoffees, newAddedCoffe])
    setValue(1)
  }

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
          <InputNumber max={9} changeValue={changeValue} value={value} />
          <button title="Adicionar ao carrinho" onClick={handleAddCoffeToList}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </AmountContainer>
      </PriceAndAmountContainer>
    </CoffeeCardContainer>
  )
}
