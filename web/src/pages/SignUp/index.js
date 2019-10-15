import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "No mínimo 3 caracteres")
    .required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-amil válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoStack" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
