import styled from "styled-components";

export const DocumentStyle = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  gap: 35%;
  border: 2px solid #e9e9e9;
  border-radius: 10px;

  @media screen and (max-width: 810px) {
    padding: 20px;
    font-size: 18px;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Text = styled.p`
  width: 200px;
  color: #000;
  font-weight: bold;
`;

export const Description = styled.p`
  width: fit-content;
  color: #000;
  font-weight: bold;

  @media screen and (max-width: 810px) {
    word-wrap: anywhere;
  }
`;

export const Span = styled.span`
  color: #808080;
  font-weight: normal;
`;
