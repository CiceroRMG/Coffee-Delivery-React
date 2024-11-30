import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  LocationInfoHeader,
  LocationInfosContainer,
  LocationInputsContainer,
  PaymentFormDataContainer,
  PaymentInfoHeader,
  PaymentInfosContainer,
  RadioPaymentContent,
} from './styles'

export function PaymentFormData() {
  return (
    <PaymentFormDataContainer>
      <LocationInfosContainer>
        <LocationInfoHeader>
          <MapPinLine weight="regular" size={22} />
          <div className="textHeader">
            <h3>Endereço de Entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </LocationInfoHeader>
        <LocationInputsContainer>
          <input
            type="number"
            name="cep"
            id="cepInput"
            placeholder="CEP"
            className="cepInput"
          />

          <input type="text" placeholder="Rua" />

          <div className="numberAndComplementDivInputs">
            <input
              type="number"
              name="houseNumber"
              id="houseNumberInput"
              placeholder="Número"
              className="houseNumberInput"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="complementInput"
            />
          </div>

          <div className="districtAndCityAndUFDivInputs">
            <input type="text" placeholder="Bairro" className="districtInput" />
            <input
              type="text"
              name="city"
              id="cityInput"
              placeholder="Cidade"
              className="cityInput"
            />
            <input
              type="text"
              name="uf"
              id="ufInput"
              max={2}
              min={2}
              placeholder="UF"
              className="ufInput"
            />
          </div>
        </LocationInputsContainer>
      </LocationInfosContainer>
      <PaymentInfosContainer>
        <PaymentInfoHeader>
          <CurrencyDollar weight="regular" size={22} />
          <div className="textHeader">
            <h3>Pagamento</h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </PaymentInfoHeader>
        <RadioPaymentContent>
          <div>
            <input type="radio" name="paymentType" id="creditCard" />
            <label htmlFor="creditCard">
              <CreditCard weight="regular" size={16} />
              Cartão de Crédito
            </label>
          </div>
          <div>
            <input type="radio" name="paymentType" id="debitCard" />
            <label htmlFor="debitCard">
              <Bank weight="regular" size={16} />
              Cartão de Débito
            </label>
          </div>
          <div>
            <input type="radio" name="paymentType" id="fisicMoney" />
            <label htmlFor="fisicMoney">
              <Money weight="regular" size={16} />
              Dinheiro
            </label>
          </div>
        </RadioPaymentContent>
      </PaymentInfosContainer>
    </PaymentFormDataContainer>
  )
}
