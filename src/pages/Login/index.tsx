import { useForm } from 'react-hook-form'
import { Button } from "@otica/components/Button";
import { ValidationSchemaLogin } from "@otica/configs";
import { InputUncontrolled } from "@otica/InputUncontrolled";
import { BannerWrapper, ButtonWrapper, Container, InputContent, InputWrapper, LabelBanner, LabelPass, Pstyled, Pstyled2, WrapperContent } from "./styles";
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthService } from '@otica/services';
import { useUser } from '@otica/stores';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(ValidationSchemaLogin),
  })
  const onSubmit = handleSubmit(({ email, password }) => {
    AuthService.logar(email, password)
      .then(res => {
        useUser.setState({
          token: res.data.jwt,
          createdAt: res.data.createdAt,
          id: res.data.id,
          username: res.data.name,
          roles: res.data.roles,
        })

        if (res) {
          navigate('/')
        }
      })
      .catch(err => {
        alert(err.response.data.error)
      })
  })

  return (
    <Container>
      <BannerWrapper>
        CLÍNICA DE OLHOS
        <LabelBanner>CENTRAL</LabelBanner>
      </BannerWrapper>
      <InputContent>
        <WrapperContent>
          <InputWrapper>
            <Pstyled>Usuario:</Pstyled>
            <InputUncontrolled control={control} erroMessage={errors.email?.message} name="email" placeholder="Email" />
            <Pstyled2>Senha:</Pstyled2>
            <InputUncontrolled control={control} erroMessage={errors.password?.message} name="password" placeholder="Senha" />
          </InputWrapper>
          <LabelPass onClick={() => alert('Samuel Gay')}>ESQUECEU A SENHA:</LabelPass>
        </WrapperContent>
        <ButtonWrapper>
          <Button type='submit' onClick={onSubmit}>ENTRAR</Button>
        </ButtonWrapper>
      </InputContent>
    </Container >
  )
}