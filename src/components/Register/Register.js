import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  UnderContainer,
  Title,
  Form,
  FormItem,
  Controls,
  BtnReturn,
  BtnRegister,
} from "./Styles";

export default function Register(props) {
  const [message, setMessage] = useState();

  const [id, setId] = useState();
  const [titulo, setTitulo] = useState();
  const [editora, setEditora] = useState();
  const [foto, setFoto] = useState();
  const [autor, setAutor] = useState();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    let autores = [];
    autores = autor.split(",");
    const obra = {
      titulo: titulo,
      editora: editora,
      foto: foto,
      autores: autores,
    };

    await axios.post("/obras", obra).then((response) => {
      setId(response.data._id);
      setMessage("Livro cadastrado com sucesso");
    });
  }

  return (
    <UnderContainer>
      <Container message={message}>
        {!message ? (
          <>
            <Title>Novo Cadastro</Title>
            <Form onSubmit={handleSubmit}>
              <FormItem>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text>"
                  id="titulo"
                  placeholder="Digite o título do livro"
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
                  onChange={(event) => setAutor(event.target.value)}
                  required
                ></input>
              </FormItem>
              <Controls>
                <BtnReturn
                  type="submit"
                  value="Voltar"
                  onClick={() => props.setRegister(false)}
                ></BtnReturn>
                <BtnRegister
                  type="submit"
                  value="Cadastrar"
                  onSubmit={handleSubmit}
                ></BtnRegister>
              </Controls>
            </Form>
          </>
        ) : (
          <>
            <Title>{message}</Title>
            <Controls>
              <BtnRegister
                type="submit"
                value="Fechar"
                onClick={() => {
                  props.setRegister(false);
                  navigate("/", { state: id });
                }}
              ></BtnRegister>
            </Controls>
          </>
        )}
      </Container>
    </UnderContainer>
  );
}
