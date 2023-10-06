import { ToastProps } from "./Toast.interface";
import { Text, ToastContainer } from "./Toast.style";
import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons/lib";

export default function Toast({ message }: ToastProps) {
  return (
    <ToastContainer
      style={{
        opacity: message ? "1" : "0",
        transition: "all .3s",
        visibility: message ? "visible" : "hidden",
      }}
    >
      <Text>{message}</Text>
      <IconContext.Provider value={{ color: "white" }}>
        <RxCross1 />
      </IconContext.Provider>
    </ToastContainer>
  );
}
