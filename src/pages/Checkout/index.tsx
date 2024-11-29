import { PaymentFormData } from './components/PaymentForm'
import { CheckoutContainer, FormDataContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormDataContainer>
        <h3>Complete seu pedido</h3>
        <PaymentFormData />
      </FormDataContainer>

      <div>
        <h3>Cafés selecionados</h3>

        <ul>
          <li>Lista de cafes selecionados</li>
        </ul>

        <div>
          <span>
            Total de itens<span>R$ 40,00</span>
          </span>
          <span>
            Entrega
            <span>R$ 3,50</span>
          </span>
          <span>
            Total
            <span>R$ 50,00</span>
          </span>
          <button>Confirmar Pedido</button>
        </div>
      </div>
    </CheckoutContainer>
  )
}
