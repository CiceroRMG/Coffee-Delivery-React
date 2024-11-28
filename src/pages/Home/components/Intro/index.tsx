import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  BackgroundColors,
  IntroContainer,
  IntroContent,
  IntroInfosContent,
  IntroItemsContent,
  IntroTitleContent,
  Item,
  ItemsContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroInfosContent>
          <IntroTitleContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </IntroTitleContent>
          <IntroItemsContent>
            <ItemsContainer>
              <Item backgroundColor={BackgroundColors.YELLOW_DARK}>
                <ShoppingCart size={16} weight="fill" />
                <span>Compra simples e segura</span>
              </Item>
              <Item backgroundColor={BackgroundColors.YELLOW}>
                <Timer size={16} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </Item>
            </ItemsContainer>
            <ItemsContainer>
              <Item backgroundColor={BackgroundColors.GRAY}>
                <Package size={16} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </Item>
              <Item backgroundColor={BackgroundColors.PURPLE}>
                <Coffee size={16} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </Item>
            </ItemsContainer>
          </IntroItemsContent>
        </IntroInfosContent>
        <img src="/src/assets/coffeMainImg.svg" alt="Imagem de um café" />
      </IntroContent>
    </IntroContainer>
  )
}
