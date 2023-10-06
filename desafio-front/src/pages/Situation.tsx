import { useState } from "react";
import {
  ButtonBack,
  ButtonContainer,
  ButtonSave,
  ContentForm,
  Form,
  HeaderForm,
  HeaderSituation,
  Input,
  InputContainer,
  Label,
} from "../styles/Situation";
import { ApiService } from "../api/api";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FiChevronLeft } from "react-icons/fi";
import Header from "../components/Header/Header";
import Toast from "../components/Toast/Toast";

export default function Situation() {
  const api = new ApiService();

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function create(e: any) {
    e.preventDefault();
    try {
      if (name.length === 0 || description.length === 0) {
        return setMessage("Field name or description are empty");
      }

      const payload = {
        name,
        description,
      };

      const { message } = await api.create(payload);
      setMessage(message);
      setName("");
      setDescription("");
    } catch (error) {
      setMessage("Error create register");
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
  }

  return (
    <>
      <Header />
      <main>
        <Form onSubmit={(e) => create(e)}>
          <HeaderForm>
            <HeaderSituation>
              <IconContext.Provider value={{ color: "white", size: "23px" }}>
                <FiChevronLeft />
              </IconContext.Provider>
              <Link to="/">Situação</Link>
            </HeaderSituation>
            <ButtonContainer>
              <ButtonBack>
                <Link to="/">Voltar</Link>
              </ButtonBack>
              <ButtonSave onClick={create}>Salvar</ButtonSave>
            </ButtonContainer>
          </HeaderForm>
          <ContentForm>
            <InputContainer>
              <Label htmlFor="name" id="name">
                Nome*
              </Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="description" id="description">
                Descrição*
              </Label>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputContainer>
          </ContentForm>
          <Toast message={message} />
        </Form>
      </main>
    </>
  );
}
