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

export function Checkout() {
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
            <li>
              <CoffeSelectedInfosContainer>
                <CoffeInfosContent>
                  <img src="/src/assets/americano.svg" alt="" />
                  <CoffeInfosAmountAndDelete>
                    <span>Expresso Americano</span>
                    <div className="amountAndDeleteInputs">
                      <input type="number" />
                      <button>
                        <Trash weight="regular" size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </CoffeInfosAmountAndDelete>
                </CoffeInfosContent>

                <span className="priceTag">R$ 9,90</span>
              </CoffeSelectedInfosContainer>
            </li>
            <li>
              <CoffeSelectedInfosContainer>
                <CoffeInfosContent>
                  <img src="/src/assets/americano.svg" alt="" />
                  <CoffeInfosAmountAndDelete>
                    <span>Expresso Americano</span>
                    <div className="amountAndDeleteInputs">
                      <input type="number" />
                      <button>
                        <Trash weight="regular" size={16} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </CoffeInfosAmountAndDelete>
                </CoffeInfosContent>

                <span className="priceTag">R$ 9,90</span>
              </CoffeSelectedInfosContainer>
            </li>
          </ul>

          <TotalAndConfirmOrderContainer>
            <TotalPriceContent>
              <span>
                <span className="infoDescription">Total de itens</span>
                <span className="priceInfo">R$ 40,00</span>
              </span>
              <span>
                <span className="infoDescription">Entrega</span>
                <span className="priceInfo">R$ 3,50</span>
              </span>
              <span className="totalPriceInfo">
                <span>Total</span>
                <span>R$ 50,00</span>
              </span>
            </TotalPriceContent>
            <button>Confirmar Pedido</button>
          </TotalAndConfirmOrderContainer>
        </FormConfirmOrderContainer>
      </FormConfirmOrderBox>
    </CheckoutContainer>
  )
}
