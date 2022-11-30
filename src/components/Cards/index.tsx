import { Icon, IconProps } from "../Icon";
import { Container, WrapperCards, WrapperIcon, WrapperText } from "./styles";

export type CardsType = {
  id: number
  text: string
  iconMiddle: Pick<IconProps, 'name'>['name']
}

export type CardsProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {
    listCard: CardsType[]
  }

export function Cards({ listCard }: CardsProps) {
  return (
    <Container>
      {listCard.map(card => (
        <WrapperCards key={card.id}>
          <WrapperIcon><Icon size={111} name={card.iconMiddle} /></WrapperIcon>
          <WrapperText>{card.text}</WrapperText>
        </WrapperCards>
      ))}
    </Container>
  )
}