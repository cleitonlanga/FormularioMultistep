import React from "react";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

//Css
import "../css/thanks.css";

const emojiData = {
  unstatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
function Thanks({ data }) {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante para nós, em breve você receberá um
        cupom de 10% desconto para sua próxima compra.
      </p>
      <p>
        Para concluir sua avalição clique no botão <strong> Enviar</strong>{" "}
        abaixo
      </p>
      <h3>
        Aqui está o resumo da sua avaliação <br /> {data.name}
      </h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {data.review}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
}

export default Thanks;
