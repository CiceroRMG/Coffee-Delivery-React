import { Trash } from '@phosphor-icons/react'
import { PaymentFormData } from './components/PaymentForm'
import {
  CheckoutContainer,
  CoffeInfosAmountAndDelete,
  CoffeInfosContent,
  CoffeSelectedInfosContainer,
  FormConfirmOrderBox,
  FormConfirmOrderContainer,
  FormDataContainer,
  TotalAndConfirmOrderContainer,
  TotalPriceContent,
} from './styles'
import { NavLink } from 'react-router-dom'
import { InputNumber } from '../../components/InputNumber'
import { useContext } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'
import { CoffeeCardProps } from '../Home/components/CoffeeCard'

const data = await fetch('/src/db/coffees.json')
const coffeeCardsListWithInfos: CoffeeCardProps[] = await data.json()

export function Checkout() {
  const { selectedCoffees, updateCoffeeList } = useContext(CoffeeListContext)

  const selectedCoffeesWithInfos = coffeeCardsListWithInfos
    .filter((coffeeInfo) =>
      selectedCoffees.some(
        (selectedCoffee) => selectedCoffee.id === coffeeInfo.id,
      ),
    )
    .map((coffeeInfo) => {
      const selectedCoffee = selectedCoffees.find(
        (coffee) => coffee.id === coffeeInfo.id,
      )
      return {
        ...coffeeInfo,
        quantity: selectedCoffee ? selectedCoffee.quantity : 1,
      }
    })

  const totalItensPrice = selectedCoffeesWithInfos.reduce((total, coffee) => {
    return total + coffee.quantity * Number(coffee.price)
  }, 0)

  const deliveryPrice = 3.5
  const totalPriceWithDelivery = totalItensPrice + deliveryPrice

  function changeQuantityCoffe(id: string, quantity: number) {
    const updatedCoffees = selectedCoffees.map((coffee) =>
      coffee.id === id ? { ...coffee, quantity } : coffee,
    )
    updateCoffeeList(updatedCoffees)
  }

  function deleteCoffeeOfList(id: string) {
    const updatedCoffees = selectedCoffees.filter((coffee) => coffee.id !== id)
    updateCoffeeList(updatedCoffees)
  }

  return (
    <CheckoutContainer>
      <FormDataContainer>
        <h3>Complete seu pedido</h3>
        <PaymentFormData />
      </FormDataContainer>

      <FormConfirmOrderBox>
        <h3 className="formTitle">Cafés selecionados</h3>

        <FormConfirmOrderContainer>
          <ul className="selectedCoffeesList">
            {selectedCoffeesWithInfos.map((coffee) => {
              return (
                <li key={coffee.id}>
                  <CoffeSelectedInfosContainer>
                    <CoffeInfosContent>
                      <img src={coffee.imgUrl} alt="" />
                      <CoffeInfosAmountAndDelete>
                        <span>{coffee.title}</span>
                        <div className="amountAndDeleteInputs">
                          <InputNumber
                            max={9}
                            value={coffee.quantity}
                            changeValue={(newQuantity) =>
                              changeQuantityCoffe(coffee.id, newQuantity)
                            }
                          />
                          <button
                            className="trashButton"
                            onClick={() => deleteCoffeeOfList(coffee.id)}
                          >
                            <Trash weight="regular" size={16} />
                            <span>Remover</span>
                          </button>
                        </div>
                      </CoffeInfosAmountAndDelete>
                    </CoffeInfosContent>

                    <span className="priceTag">
                      R$ {(coffee.quantity * Number(coffee.price)).toFixed(2)}
                    </span>
                  </CoffeSelectedInfosContainer>
                </li>
              )
            })}
          </ul>

          <TotalAndConfirmOrderContainer>
            <TotalPriceContent>
              <span>
                <span className="infoDescription">Total de itens</span>
                <span className="priceInfo">
                  R$ {totalItensPrice.toFixed(2)}
                </span>
              </span>
              <span>
                <span className="infoDescription">Entrega</span>
                <span className="priceInfo">R$ {deliveryPrice.toFixed(2)}</span>
              </span>
              <span className="totalPriceInfo">
                <span>Total</span>
                <span>R$ {totalPriceWithDelivery.toFixed(2)}</span>
              </span>
            </TotalPriceContent>
            <NavLink to={'/success'} className={'confirmButton'}>
              Confirmar Pedido
            </NavLink>
          </TotalAndConfirmOrderContainer>
        </FormConfirmOrderContainer>
      </FormConfirmOrderBox>
    </CheckoutContainer>
  )
}
