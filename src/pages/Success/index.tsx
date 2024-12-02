import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  InfoContent,
  InfoTextDiv,
  SuccessContainer,
  SuccessHeader,
  SuccessInfosContent,
  SuccessMainContainer,
} from './styles'

export function Success() {
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
                  Entrega em <strong>Rua blablablabla</strong>
                </span>
                <span>Cidade - Estado, SG</span>
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
                  <strong>Método de pagamento</strong>
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
