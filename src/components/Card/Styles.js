import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 21rem;
  background-color: #efd6ac;
  border-radius: 3px;
  border: solid #775144 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  z-index: 1;
`;

export const Title = styled.div`
  margin: 0.5rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  img {
    width: 20rem;
  }
`;

export const Controls = styled.div`
  margin-top: 1rem;
  padding: 0.3rem;
  display: flex;
  gap: 0.5rem;
`;

export const BtnEdit = styled.input`
  color: #68b0ab;
  background-color: white;
  border-radius: 3px;
  height: 2rem;
  width: 6rem;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #68b0ab;
  }
`;
export const BtnDelete = styled.input`
  color: #c09891;
  background-color: white;
  border-radius: 3px;
  height: 2rem;
  width: 6rem;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #c09891;
  }
`;
