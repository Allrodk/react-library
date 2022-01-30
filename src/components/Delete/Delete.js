import axios from "axios";
import { useState } from "react";
import {
  Container,
  UnderContainer,
  Title,
  Controls,
  BtnCancel,
  BtnDelete,
} from "./Styles";

export default function Delete(props) {
  const [message, setMessage] = useState();

  async function handleDelete() {
    await axios.delete(`/obras/${props.value}`).then((response) => {
      setMessage(response.data);
    });
  }

  return (
    <UnderContainer>
      <Container>
        {!message ? (
          <>
            <Title>Deseja realmente excluir esta obra?</Title>
            <Controls>
              <BtnCancel
                type="submit"
                value="Cancelar"
                onClick={() => props.setValue("")}
              ></BtnCancel>
              <BtnDelete
                type="submit"
                value="Excluir"
                onClick={handleDelete}
              ></BtnDelete>
            </Controls>
          </>
        ) : (
          <>
            <Title>Obra excluída com sucesso</Title>
            <Controls>
              <BtnCancel
                type="submit"
                value="Fechar"
                onClick={() => props.setValue("")}
              ></BtnCancel>
            </Controls>
          </>
        )}
      </Container>
    </UnderContainer>
  );
}
