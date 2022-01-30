import { Container, Main, Title, Section } from "./Styles.js";
import Card from "../components/Card/Card";
import Edit from "../components/Edit/Edit";
import Delete from "../components/Delete/Delete";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [obras, setObras] = useState([]);
  const [edit, setEdit] = useState("");
  const [excluir, setExcluir] = useState("");
  const location = useLocation();

  const getData = async () => {
    await axios.get("/obras").then((response) => {
      setObras(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, [location.state, edit, excluir]);

  return (
    <Container>
      {edit ? <Edit setEdit={setEdit} edit={edit} /> : null}
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
                setExcluir={setExcluir}
                setEdit={setEdit}
              />
            );
          })}
        </Section>
      </Main>
    </Container>
  );
}
