import styled from "styled-components";

export const UnderContainer = styled.div`
  top: 3.9rem;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 18;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  top: ${(props) =>
    !props.message
      ? "calc(100vh - 50vh - 14rem)"
      : "calc(100vh - 50vh - 4rem)"};
  position: fixed;
  flex-direction: column;
  gap: 1rem;
  background-color: #efd6ac;
  color: black;
  margin-left: 1%;
  padding: 1.2rem;
  font-weight: bold;
  border: 5px solid #c09891;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  z-index: 20;
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin-top: 2rem;
  }
`;

export const Controls = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.3rem;
  display: flex;
  gap: 0.5rem;
`;

export const BtnRegister = styled.input`
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
export const BtnReturn = styled.input`
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
