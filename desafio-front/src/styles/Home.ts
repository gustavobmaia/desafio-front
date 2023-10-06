import { styled } from "styled-components";

export const Content = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  height: inherit;
  background-color: #fff;
`;
export const HeaderContent = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #145e43;

  @media screen and (max-width: 750px) {
    justify-content: center;
    gap: 20px;
  }
`;
export const HeaderContentTitle = styled.h1`
  color: #fff;
  font-weight: normal;
  font-size: 22px;

  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: 20px;
  }
`;
export const InputSearch = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 40px;
  outline: none;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  bottom: 17px;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const Documents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 40px;
`;
export const RegisterBox = styled.div`
  position: absolute;
  bottom: -34px;
  right: 50px;
`;
export const RegisterButton = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  background-color: #b45f06;
`;
export const NoRegister = styled.div`
  margin: 4rem auto;
`;
export const Text = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;
