import { yupResolver } from "@hookform/resolvers/yup";
import { Footer, Header } from "@otica/components";
import { ValidationSchemaLogin } from "@otica/configs";
import { AuthService } from "@otica/services";
import { useUser } from "@otica/stores";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DropdownContent } from "./DropdownContent";
import { WrapperInputFour, DatePickerStyled, BodyInputTelefone, WrapperInputTwo, WrapperInput, Pstyled, WrapperContent, WrapperContentSelect, BodyInputPrimary } from "./styles";
import "react-datepicker/dist/react-datepicker.css";


export function UsersCreate() {
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
  // const onSubmit = handleSubmit(({ email, password }) => {
  //   AuthService.logar(email, password)
  //     .then(res => {
  //       useUser.setState({
  //         token: res.data.jwt,
  //         id: res.data.id,
  //         username: res.data.name,
  //         roles: res.data.roles,
  //       })

  //       if (res) {
  //         navigate('/')
  //       }
  //     })
  //     .catch(err => {
  //       alert(err.response.data.error)
  //     })
  // })
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Header title={'Lista de Usuários'} />
      <WrapperContentSelect>
        <DropdownContent title='*Perfil' />
      </WrapperContentSelect>
      <WrapperContent>
        <WrapperInputTwo>
          <WrapperInput>
            <Pstyled>*Nome</Pstyled>
            <BodyInputPrimary required widthProp={"100%"} control={control} erroMessage={errors.email?.message} name="nome" placeholder="Nome" tipo="text" />
          </WrapperInput>
          <WrapperInput>
            <Pstyled>*E-mail</Pstyled>
            <BodyInputPrimary required widthProp={"100%"} control={control} erroMessage={errors.email?.message} name="email" placeholder="Email" tipo='email' />
          </WrapperInput>
        </WrapperInputTwo>
        <WrapperInputFour>
          <WrapperInput>
            <Pstyled>*Telefone 1</Pstyled>
            <BodyInputTelefone widthProp={"294px"} control={control} tel erroMessage={errors.email?.message} name="telefone" placeholder="(00) 00000-0000" tipo={'tel'} id="tel" maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required />
          </WrapperInput>
          <WrapperInput>
            <Pstyled>Telefone 2</Pstyled>
            <BodyInputTelefone widthProp={"294px"} control={control} erroMessage={errors.email?.message} name="email" placeholder="(00) 00000-0000" tipo={'tel'} maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" />
          </WrapperInput>
          <WrapperInput>
            <Pstyled>Data de Nascimento</Pstyled>
            <DatePickerStyled selected={startDate} onChange={(date: Date) => setStartDate(date)} />
          </WrapperInput>
        </WrapperInputFour>
      </WrapperContent>
      <Footer />
    </div>
  )
}