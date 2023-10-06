import { styled } from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #fff;
`;
export const HeaderForm = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #145e43;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;
export const HeaderSituation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const HeaderLink = styled.a`
  color: #fff;
  font-size: 23px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
export const ButtonSave = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: #1a6b4d;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: transparent;
  }
`;
export const ButtonBack = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #1a6b4d;
  }
`;
export const ContentForm = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child {
    width: 100%;
  }
`;
export const Input = styled.input`
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  outline: none;
`;
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 15px;
`;
