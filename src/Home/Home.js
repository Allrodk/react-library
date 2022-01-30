import { Container, Main, Title, Section } from "./Styles.js";
import Card from "../components/Card/Card";
import Delete from "../components/Delete/Delete";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [obras, setObras] = useState([]);
  const [excluir, setExcluir] = useState("");

  const getData = async () => {
    await axios.get("/obras").then((response) => {
      setObras(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {excluir ? <Delete setValue={setExcluir} value={excluir} /> : null}
      <Title>
        <h1>Acervo</h1>
      </Title>
      <Main>
        <Section>
          {obras.map((obra) => {
            return (
              <Card
                key={obra._id}
                id={obra._id}
                titulo={obra.titulo}
                editora={obra.editora}
                foto={obra.foto}
                autores={obra.autores}
                setValue={setExcluir}
              />
            );
          })}
        </Section>
      </Main>
    </Container>
  );
}
