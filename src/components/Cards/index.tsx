import { useNavigate } from "react-router-dom";
import { Icon, IconProps } from "../Icon";
import { Container, WrapperCards, WrapperIcon, WrapperText } from "./styles";

export type CardsType = {
  id: number
  text: string
  iconMiddle: Pick<IconProps, 'name'>['name']
  navigate: string
}

export type CardsProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {
    listCard: CardsType[]
  }

export function Cards({ listCard }: CardsProps) {
  const navigate = useNavigate()
  return (
    <Container>
      {listCard.map(card => (
        <WrapperCards key={card.id} onClick={() => navigate(card.navigate)}>
          <WrapperIcon><Icon size={111} name={card.iconMiddle} /></WrapperIcon>
          <WrapperText>{card.text}</WrapperText>
        </WrapperCards>
      ))}
    </Container>
  )
}