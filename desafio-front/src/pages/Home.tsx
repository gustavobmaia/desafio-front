/* eslint-disable react-hooks/exhaustive-deps */
import {
  Content,
  RegisterBox,
  RegisterButton,
  HeaderContent,
  HeaderContentTitle,
  InputSearch,
  Documents,
  SearchButton,
  NoRegister,
  Text,
} from "../styles/Home";

import { ApiService } from "../api/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Modal from "../components/Modal/Modal";
import Toast from "../components/Toast/Toast";
import Header from "../components/Header/Header";
import Document from "../components/Document/Document";

import { Register } from "../interfaces";

import { BsSearch } from "react-icons/bs";
import { IoAddSharp } from "react-icons/io5";

import { IconContext } from "react-icons";

export default function Home() {
  const api = new ApiService();

  const [registers, setRegisters] = useState<Register[]>([]);

  const [register, setRegister] = useState<Register>({
    name: "",
    description: "",
  });

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    findAll();
  }, []);

  useEffect(() => {
    setTimeout(() => setMessage(""), 3000);
  }, [message]);

  async function findAll() {
    try {
      const data = await api.findAll();
      setRegisters(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleModal() {
    setModal(!modal);
  }

  function findByName(e) {
    e.preventDefault();

    const result = registers.find(
      (register) => register.name.toLowerCase() === name.toLowerCase()
    );

    if (result) {
      setRegister(result);
      setModal(true);
    } else {
      setMessage("Nenhum resultado encontrado");
    }
  }

  return (
    <>
      <Header />
      <main>
        <Content>
          <HeaderContent>
            <HeaderContentTitle>Situações do documento</HeaderContentTitle>
            <form onSubmit={(e) => findByName(e)}>
              <SearchButton>
                <BsSearch />
              </SearchButton>
              <InputSearch
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Pesquisar por nome"
              />
            </form>
          </HeaderContent>
          <Documents className="documents">
            {registers.length ? (
              registers?.map((item) => (
                <Document
                  key={item.name}
                  name={item.name}
                  description={item.description}
                />
              ))
            ) : (
              <NoRegister>
                <Text>Nenhum registro adicionado</Text>
              </NoRegister>
            )}
          </Documents>
          <RegisterBox>
            <RegisterButton>
              <Link to="/situation" title="Novo registro">
                <IconContext.Provider value={{ size: "25px" }}>
                  <IoAddSharp width="40px" height="40px" />
                </IconContext.Provider>
              </Link>
            </RegisterButton>
          </RegisterBox>
          <Toast message={message} />
        </Content>

        {modal && (
          <Modal
            onClick={handleModal}
            name={register.name}
            description={register.description}
          />
        )}
      </main>
    </>
  );
}
