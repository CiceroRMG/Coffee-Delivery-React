import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  InfoContent,
  InfoTextDiv,
  SuccessContainer,
  SuccessHeader,
  SuccessInfosContent,
  SuccessMainContainer,
} from './styles'
import { useLocation } from 'react-router-dom'
import { NewOrderFormData } from '../Checkout'

export function Success() {
  const location = useLocation()
  const { orderData } = location.state as { orderData: NewOrderFormData }

  return (
    <>
      <SuccessContainer>
        <SuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessHeader>
        <SuccessMainContainer>
          <SuccessInfosContent>
            <InfoContent>
              <MapPin weight="fill" size={16} className="mapImg" />
              <InfoTextDiv>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderData.street}, {orderData.houseNumber}
                  </strong>
                </span>
                <span>
                  {orderData.district} - {orderData.city}, {orderData.uf}
                </span>
              </InfoTextDiv>
            </InfoContent>
            <InfoContent>
              <Timer weight="fill" size={16} className="timerImg" />
              <InfoTextDiv>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </InfoTextDiv>
            </InfoContent>
            <InfoContent>
              <CurrencyDollar
                weight="regular"
                size={16}
                className="dollarImg"
              />
              <InfoTextDiv>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>{orderData.paymentType}</strong>
                </span>
              </InfoTextDiv>
            </InfoContent>
          </SuccessInfosContent>
          <img src="/src/assets/motocycle.svg" alt="" />
        </SuccessMainContainer>
      </SuccessContainer>
    </>
  )
}
