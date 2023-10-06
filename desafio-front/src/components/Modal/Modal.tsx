//import { ModalProps } from "./Modal.interface";
import { ModalContainer, Close, Text, Box } from "./Modal.style";
import { RxCross1 } from "react-icons/rx";
import { ModalProps } from "./Modal.interface";

export default function Modal({ name, description, onClick }: ModalProps) {
  return (
    <>
      <ModalContainer>
        <Close onClick={onClick}>
          <RxCross1 />
        </Close>
        <Box>
          <Text>Nome: {name}</Text>
        </Box>
        <Box>
          <Text>Descrição: {description}</Text>
        </Box>
      </ModalContainer>
    </>
  );
}
