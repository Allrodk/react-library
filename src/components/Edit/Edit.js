import axios from "axios";
import { useState, useEffect } from "react";
import {
  Container,
  UnderContainer,
  Title,
  Form,
  FormItem,
  Controls,
  BtnReturn,
  BtnEdit,
} from "./Styles";

export default function Edit(props) {
  const [message, setMessage] = useState();

  const [titulo, setTitulo] = useState();
  const [editora, setEditora] = useState();
  const [foto, setFoto] = useState();
  const [autor, setAutor] = useState();

  const getData = async () => {
    await axios.get(`/obras/${props.edit}`).then((response) => {
      setTitulo(response.data.titulo);
      setEditora(response.data.editora);
      setFoto(response.data.foto);
      setAutor(response.data.autores);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    let autores = [];
    if (typeof autor === "string") {
      autores = autor.split(",");
    } else {
      autores = autor;
    }
    const obra = {
      titulo: titulo,
      editora: editora,
      foto: foto,
      autores: autores,
    };

    await axios.put(`/obras/${props.edit}`, obra).then((response) => {
      setMessage("Ateração efetuada com sucesso");
    });
  }

  return (
    <UnderContainer>
      <Container message={message}>
        {!message ? (
          <>
            <Title>Alterar Cadastro</Title>
            <Form onSubmit={handleSubmit}>
              <FormItem>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text>"
                  id="titulo"
                  placeholder="Digite o título do livro"
                  defaultValue={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  required
                ></input>
              </FormItem>

              <FormItem>
                <label htmlFor="editora">Editora</label>
                <input
                  type="text"
                  id="editora"
                  placeholder="Digite o nome da Editora"
                  defaultValue={editora}
                  onChange={(event) => setEditora(event.target.value)}
                  required
                ></input>
              </FormItem>

              <FormItem>
                <label htmlFor="foto">Foto</label>
                <input
                  type="text"
                  id="foto"
                  placeholder="https://i.imgur.com/UH3IPXw.jpg"
                  defaultValue={foto}
                  onChange={(event) => setFoto(event.target.value)}
                  required
                ></input>
              </FormItem>

              <FormItem>
                <label htmlFor="autores">Autores</label>
                <input
                  type="text"
                  id="autores"
                  placeholder="JK Rowling, Outro Autor"
                  defaultValue={autor}
                  onChange={(event) => setAutor(event.target.value)}
                  required
                ></input>
              </FormItem>
              <Controls>
                <BtnReturn
                  type="submit"
                  value="Voltar"
                  onClick={() => props.setEdit(false)}
                ></BtnReturn>
                <BtnEdit
                  type="submit"
                  value="Editar"
                  onSubmit={handleSubmit}
                ></BtnEdit>
              </Controls>
            </Form>
          </>
        ) : (
          <>
            <Title>{message}</Title>
            <Controls>
              <BtnEdit
                type="submit"
                value="Fechar"
                onClick={() => props.setEdit(false)}
              ></BtnEdit>
            </Controls>
          </>
        )}
      </Container>
    </UnderContainer>
  );
}
