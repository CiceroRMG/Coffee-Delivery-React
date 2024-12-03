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
import { useFormContext } from 'react-hook-form'

export function PaymentFormData() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

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
            id="cepInput"
            placeholder="CEP"
            className={`cepInput ${errors.cep ? 'input-error' : ''}`}
            {...register('cep')}
          />

          <input
            type="text"
            placeholder="Rua"
            {...register('street')}
            className={`${errors.street ? 'input-error' : ''}`}
          />

          <div className="numberAndComplementDivInputs">
            <input
              type="number"
              id="houseNumberInput"
              placeholder="Número"
              className={`houseNumberInput ${errors.houseNumber ? 'input-error' : ''}`}
              {...register('houseNumber')}
            />
            <input
              type="text"
              placeholder="Complemento"
              className={`complementInput ${errors.complement ? 'input-error' : ''}`}
              {...register('complement')}
            />
          </div>

          <div className="districtAndCityAndUFDivInputs">
            <input
              type="text"
              placeholder="Bairro"
              className={`districtInput ${errors.district ? 'input-error' : ''}`}
              {...register('district')}
            />
            <input
              type="text"
              id="cityInput"
              placeholder="Cidade"
              className={`cityInput ${errors.city ? 'input-error' : ''}`}
              {...register('city')}
            />
            <input
              type="text"
              id="ufInput"
              max={2}
              min={2}
              placeholder="UF"
              className={`ufInput ${errors.uf ? 'input-error' : ''}`}
              {...register('uf')}
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
            <input
              type="radio"
              id="creditCard"
              value={'creditCard'}
              {...register('paymentType')}
            />
            <label htmlFor="creditCard">
              <CreditCard weight="regular" size={16} />
              Cartão de Crédito
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="debitCard"
              value={'debitCard'}
              {...register('paymentType')}
            />
            <label htmlFor="debitCard">
              <Bank weight="regular" size={16} />
              Cartão de Débito
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="fisicMoney"
              value={'fisicMoney'}
              {...register('paymentType')}
            />
            <label htmlFor="fisicMoney">
              <Money weight="regular" size={16} />
              Dinheiro
            </label>
          </div>
        </RadioPaymentContent>
        {errors.paymentType && (
          <span className="spanError">
            {errors.paymentType?.message as string}
          </span>
        )}
      </PaymentInfosContainer>
    </PaymentFormDataContainer>
  )
}
