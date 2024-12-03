import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AmountContainer,
  CoffeeCardContainer,
  PriceAndAmountContainer,
  PriceContent,
  TagsContainer,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { useContext, useState, useEffect } from 'react'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'

interface Tag {
  content: string
  id: string
}

export interface CoffeOnList {
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
  const { addCoffeeToList, selectedCoffees, updateCoffeeList } =
    useContext(CoffeeListContext)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    if (showDialog) {
      const timer = setTimeout(() => {
        setShowDialog(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showDialog])

  function changeValue(valueChanged: number) {
    setValue(valueChanged)
  }

  function handleAddCoffeToList() {
    const newAddedCoffe = {
      id,
      quantity: value,
    }

    const coffeeExistsIndex = selectedCoffees.findIndex(
      (coffe) => coffe.id === newAddedCoffe.id,
    )

    if (coffeeExistsIndex < 0) {
      addCoffeeToList(newAddedCoffe)
    } else {
      const updatedCoffees = selectedCoffees.map((coffe, index) => {
        if (index === coffeeExistsIndex) {
          return { ...coffe, quantity: coffe.quantity + newAddedCoffe.quantity }
        }
        return coffe
      })
      updateCoffeeList(updatedCoffees)
    }

    setValue(1)
    setShowDialog(true)
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
      {showDialog && <div className="dialog">Adicionado ao carrinho</div>}
    </CoffeeCardContainer>
  )
}
