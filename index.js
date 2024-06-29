import { input } from "./components/inputs.js";
const container = document.querySelector("#content");

const formTemplate = `
    <form>
      ${input({
        id: "name",
        label: "Nombre",
        type: "name",
        name: "name",
        classname: "input",
        placeholder: "Testino",
        required: true,
      })}
      ${input({
        id: "correo",
        label: "Your Email",
        type: "correo",
        name: "correo",
        classname: "input",
        placeholder: "abcdegmail.com",
        required: true,
      })}
      ${input({
        id: "password",
        label: "Contraseña",
        type: "password",
        name: "password",
        classname: "input",
        placeholder: "*******",
        required: true,
      })}
      <button type="submit">Crear cuenta</button>
    </form>
`;

container.innerHTML = formTemplate;

// [] {} null false true "string" 13 13.5
//peticiones
//async await, promises, eventloop, dom
//webpack
//recursividad
//y más....
