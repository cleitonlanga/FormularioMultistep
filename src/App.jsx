import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

//Components
import UserForm from "./components/UserForm";
import PreviewForm from "./components/PreviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

//Styles
import "./App.css";

//Hooks
import { useForm } from "./hooks/useForm";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <PreviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data}/>,
  ];

  const { currentstep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);
  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avalição</h2>
          <p>
            Ficamos felizes com a sua compra, utilize o formulário abaixo para
            avaliar o produto
          </p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentstep} />
          <form onSubmit={(e) => changeStep(currentstep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={(e) => changeStep(currentstep - 1, e)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}

              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="submit">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
