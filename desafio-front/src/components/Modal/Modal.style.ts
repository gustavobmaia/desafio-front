import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0 auto;
  width: 500px;
  height: 450px;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;
`;
export const Box = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin-top: 50px;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
