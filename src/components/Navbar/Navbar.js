import React, { useState } from "react";
import { Container, Logo, Links, List, ListItem, Hamburger } from "./Styles";
import Register from "../Register/Register";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [myTimeout, setMyTimeout] = useState("");
  const [register, setRegister] = useState(false);

  const handleAbreMenu = () => {
    if (!open) {
      setOpen(true);
      setMyTimeout(
        setTimeout(() => {
          setOpen(false);
        }, 5000)
      );
    } else {
      setOpen(false);
      clearTimeout(myTimeout);
    }
  };

  const handleMouseOver = () => {
    setOpen(true);
    clearTimeout(myTimeout);
  };

  const handleMouseOut = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Logo href="/">
        <span>Estante React</span>
      </Logo>

      <Links>
        <List
          activation={open}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <ListItem
            onClick={() => {
              setRegister(true);
              setOpen(false);
            }}
          >
            Novo Cadastro
          </ListItem>
        </List>
        <Hamburger onClick={handleAbreMenu}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Hamburger>
      </Links>
      {register ? <Register setRegister={setRegister} /> : null}
    </Container>
  );
}
