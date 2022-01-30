import React, { useEffect, useState } from "react";
import { Container, Logo, Links, List, ListItem, Hamburger } from "./Styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [myTimeout, setMyTimeout] = useState("");

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

  function handleLogout() {}

  const handleClick = () => {
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
          <ListItem>Novo Cadastro</ListItem>
        </List>
        <Hamburger onClick={handleAbreMenu}>
          <a href="#foo">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </Hamburger>
      </Links>
    </Container>
  );
}
