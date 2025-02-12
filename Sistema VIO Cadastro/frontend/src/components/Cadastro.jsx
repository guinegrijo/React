import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Container from "@mui/material/Container";
import Typograph from "@mui/material/Typography";
import { useState } from "react";
import sheets from "../axios/axios";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    data_nascimento: "",
    name: "",
    cpf: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastro();
  };

  async function cadastro() {
    await sheets.postCadastro(user).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "#964b00",
          }}
        >
          <AccountCircleOutlinedIcon />
        </Avatar>

        <Typograph component="h1" variant="h5">
          VIO
        </Typograph>

        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            margin="normal"
            type="email"
            value={user.email}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="data_nascimento"
            name="data_nascimento"
            margin="normal"
            type="date"
            value={user.data_nascimento}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            type="text"
            value={user.name}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            margin="normal"
            type="number"
            value={user.cpf}
            onChange={onChange}
          />

          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "#964b00" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
