import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 350px;
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: green;
`;
export const Text = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
