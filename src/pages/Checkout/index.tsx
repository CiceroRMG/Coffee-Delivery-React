import { ShoppingCart, Trash } from '@phosphor-icons/react'
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
import { InputNumber } from '../../components/InputNumber'
import { useContext, useEffect } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'
import { CoffeeCardProps } from '../Home/components/CoffeeCard'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const data = await fetch('/src/db/coffees.json')
const coffeeCardsListWithInfos: CoffeeCardProps[] = await data.json()

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe um cep').max(8),
  street: zod
    .string()
    .min(5, 'A rua precisa ter no mínimo 5 caractéres')
    .max(60, 'Limite máximo de caractéres excedidos'),
  houseNumber: zod
    .string()
    .min(1, 'Informe um número válido')
    .max(6, 'Informe um número válido')
    .refine((value) => !isNaN(Number(value)), {
      message: 'Informe um número válido',
    }),
  complement: zod.string().optional(),
  district: zod
    .string()
    .min(4, 'Informe um bairro com mais de 4 caractéres')
    .max(30, 'Limite máximo de caractéres excedidos'),
  city: zod
    .string()
    .min(4, 'Informe uma cidade com mais de 4 caractéres')
    .max(30, 'Limite máximo de caractéres excedidos'),
  uf: zod
    .string()
    .min(2, 'Insira a UF neste modelo: SC, RS ...')
    .max(2, 'Insira a UF neste modelo: SC, RS ...'),
  paymentType: zod.enum(['creditCard', 'debitCard', 'fisicMoney'], {
    required_error: 'Escolha uma forma de pagamento',
    invalid_type_error: 'Escolha uma forma de pagamento válida',
  }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { selectedCoffees, updateCoffeeList } = useContext(CoffeeListContext)
  const navigate = useNavigate()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { watch, handleSubmit, reset, setValue } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)

    reset()
    const nullArray: [] = []
    updateCoffeeList(nullArray)

    navigate('/success', { state: { orderData: data } })
  }

  const cepInput = watch('cep')

  useEffect(() => {
    async function fetchAddress(cep: string) {
      const enderecoReq = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const enderecoData = await enderecoReq.json()
      setValue('street', enderecoData.logradouro)
      setValue('district', enderecoData.bairro)
      setValue('city', enderecoData.localidade)
      setValue('uf', enderecoData.uf)
    }

    if (cepInput && cepInput.length === 8) {
      fetchAddress(cepInput)
    }
  }, [cepInput, setValue])

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

  const isSelectedCoffeesListVoid = selectedCoffees.length < 1

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormDataContainer>
          <h3>Complete seu pedido</h3>
          <FormProvider {...newOrderForm}>
            <PaymentFormData />
          </FormProvider>
        </FormDataContainer>

        <FormConfirmOrderBox>
          <h3 className="formTitle">Cafés selecionados</h3>

          <FormConfirmOrderContainer>
            <ul className="selectedCoffeesList">
              {isSelectedCoffeesListVoid ? (
                <h4 className="nullListItens">
                  Você não possui nenhum item no carrinho
                  <ShoppingCart size={50} weight="light" />
                </h4>
              ) : (
                selectedCoffeesWithInfos.map((coffee) => {
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
                          R${' '}
                          {(coffee.quantity * Number(coffee.price)).toFixed(2)}
                        </span>
                      </CoffeSelectedInfosContainer>
                    </li>
                  )
                })
              )}
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
                  <span className="priceInfo">
                    R$ {deliveryPrice.toFixed(2)}
                  </span>
                </span>
                <span className="totalPriceInfo">
                  <span>Total</span>
                  <span>R$ {totalPriceWithDelivery.toFixed(2)}</span>
                </span>
              </TotalPriceContent>
              <button
                type="submit"
                className={'confirmButton'}
                disabled={isSelectedCoffeesListVoid}
              >
                Confirmar Pedido
              </button>
            </TotalAndConfirmOrderContainer>
          </FormConfirmOrderContainer>
        </FormConfirmOrderBox>
      </form>
    </CheckoutContainer>
  )
}
