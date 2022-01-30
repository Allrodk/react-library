import { Container, Title, Main, Controls, BtnEdit, BtnDelete } from "./Styles";

export default function Card(props) {
  return (
    <Container>
      <Title>
        <h3>{props.titulo}</h3>
      </Title>
      <Main>
        <img src={props.foto} alt={props.titulo}></img>
        <div>Editora: {props.editora}</div>
        <div>
          Autores:{" "}
          {props.autores.map((el, i) => {
            return i + 1 < props.autores.length ? (
              <span key={i}>{el}, </span>
            ) : (
              <span key={i}>{el}</span>
            );
          })}
        </div>
      </Main>
      <Controls>
        <BtnEdit type="submit" value="Editar"></BtnEdit>
        <BtnDelete
          type="submit"
          value="Excluir"
          onClick={() => {
            props.setValue(props.id);
          }}
        ></BtnDelete>
      </Controls>
    </Container>
  );
}
