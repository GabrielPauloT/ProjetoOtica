import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon";
import { ButtonStyled, Container, PInicio, PQuant, PUsuario, QuantiUp, WrapperHeader, WrapperIconLeft, WrapperLeft, WrapperQuant, WrapperUsuario } from "./styles";

export type HeaderProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {
    title: string
  }

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <Container>
      <WrapperHeader>
        <WrapperLeft>
          <WrapperIconLeft>
            <ButtonStyled onClick={() => navigate('/')}>
              <Icon size={74} name="IoHomeOutline" />
            </ButtonStyled>
            <ButtonStyled onClick={() => navigate('/')}>
              <WrapperQuant>
                <QuantiUp>{''}</QuantiUp>
                <PQuant>13</PQuant>
              </WrapperQuant>
            </ButtonStyled>
          </WrapperIconLeft>
          <PInicio>{title.toLocaleUpperCase()}</PInicio>
        </WrapperLeft>
        <WrapperUsuario>
          <Icon size={47} name="IoPersonCircleSharp" />
          <PUsuario>GABRIEL</PUsuario>
        </WrapperUsuario>
      </WrapperHeader>
    </Container>
  )
}