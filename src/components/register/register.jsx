import React from "react";

import { Body } from "./styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

export default function Register() {
  return (
    <Body>
      <FormControl fullWidth>
        <InputLabel>Nome</InputLabel>
        <Input name="user" required />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Email</InputLabel>
        <Input type="email" name="email" required />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Senha</InputLabel>
        <Input type="password" name="password" required />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Tipo</InputLabel>
        <Select fullWidth>
          <MenuItem value="aluno">Aluno</MenuItem>
          <MenuItem value="professor">Professor</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Série</InputLabel>
        <Select fullWidth>
          <MenuItem value="1">1º ano</MenuItem>
          <MenuItem value="2">2º ano</MenuItem>
          <MenuItem value="3">3º ano</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Sexo</InputLabel>
        <Select fullWidth>
          <MenuItem value="masculino">Masculino</MenuItem>
          <MenuItem value="feminino">Feminino</MenuItem>
        </Select>
      </FormControl>
      <div className="login-button">
        <button>Registrar-se</button>
      </div>
    </Body>
  );
}
