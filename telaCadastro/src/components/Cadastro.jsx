import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Container from "@mui/material/Container";
import Typograph from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Email: " + user.email + "\n" + "Senha: " + user.password + "\n" + "Idade: " +  user.age + "\n" + "Nome: " + user.name);
  };

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
            backgroundColor: "brown",
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
            id="age"
            label="Idade"
            name="age"
            margin="normal"
            type="number"
            value={user.age}
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
            pattern="[A-Za-z]+"
            value={user.name}
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
