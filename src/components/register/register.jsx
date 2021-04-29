import React, { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

import { data } from "../../utils/schoolSubjects";
import { Body } from "./styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

export default function Register(props) {
  const [lastName, setLastName] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const [series, setSeries] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [name, setName] = useState({ value: "", error: false });
  const [type, setType] = useState({ value: "", error: false });
  const [sex, setSex] = useState({ value: "", error: false });
  const [matery, setMatery] = useState({ value: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.value) return setName({ error: true });
    if (!lastName.value) return setLastName({ error: true });
    if (!email.value) return setEmail({ error: true });
    if (!password.value) return setPassword({ error: true });
    if (!type.value) return setType({ error: true });
    if (type.value === "Professor" && !matery.value)
      return setMatery({ error: true });
    if (!series.value) return setSeries({ error: true });
    if (!sex.value) return setSex({ error: true });

    try {
      await api.post("/register", {
        last_name: lastName.value,
        password: password.value,
        series: series.value,
        email: email.value,
        name: name.value,
        sex: sex.value,
        type: type.value,
        matery: matery.value
      });
      return Swal.fire({
        title: "Sucesso!",
        text: "Sua conta foi criada!",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then(async (result) => {
        return props.setLoginForm("login");
      });
    } catch (err) {
      const { error } = err.response.data;
      return Swal.fire("Opps", error, "error");
    }
  };

  return (
    <Body>
      <div style={{ display: "flex" }}>
        <FormControl fullWidth style={{ marginRight: 5 }}>
          <InputLabel>Nome</InputLabel>
          <Input
            name="user"
            required
            onChange={(e) => setName({ value: e.target.value })}
            error={name.error}
          />
        </FormControl>
        <FormControl fullWidth style={{ marginLeft: 5 }}>
          <InputLabel>Sobrenome</InputLabel>
          <Input
            name="user"
            required
            onChange={(e) => setLastName({ value: e.target.value })}
            error={lastName.error}
          />
        </FormControl>
      </div>
      <FormControl fullWidth>
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail({ value: e.target.value })}
          error={email.error}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Senha</InputLabel>
        <Input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword({ value: e.target.value })}
          error={password.error}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Tipo</InputLabel>
        <Select
          fullWidth
          error={type.error}
          onChange={(e) => setType({ value: e.target.value })}
        >
          <MenuItem value="Aluno">Aluno</MenuItem>
          <MenuItem value="Professor">Professor</MenuItem>
        </Select>
      </FormControl>
      {type.value === "Professor" && (
        <FormControl fullWidth>
          <InputLabel>Matérias</InputLabel>
          <Select
            fullWidth
            error={matery.error}
            onChange={(e) => setMatery({ value: e.target.value })}
          >
            {data.map((subject, i) => (
              <MenuItem value={subject.name} id={i}>
                {subject.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl fullWidth>
        <InputLabel>Série</InputLabel>
        <Select
          fullWidth
          error={series.error}
          onChange={(e) => setSeries({ value: e.target.value })}
        >
          <MenuItem value="1º ano">1º ano</MenuItem>
          <MenuItem value="2º ano">2º ano</MenuItem>
          <MenuItem value="3º ano">3º ano</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Sexo</InputLabel>
        <Select
          fullWidth
          error={sex.error}
          onChange={(e) => setSex({ value: e.target.value })}
        >
          <MenuItem value="Masculino">Masculino</MenuItem>
          <MenuItem value="Feminino">Feminino</MenuItem>
        </Select>
      </FormControl>
      <div className="login-button">
        <button onClick={handleSubmit}>Registrar-se</button>
      </div>
    </Body>
  );
}
