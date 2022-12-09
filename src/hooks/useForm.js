import { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../contexts/GlobalContexts";

export const useForm = (initialState) => {
    const [formulario, setFormulario] = useState(initialState);


  const onChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };
  return [formulario, onChange]
};