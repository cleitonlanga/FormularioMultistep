import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

import "../css/reviewform.css";

function PreviewForm({ data, updateFieldHandler }) {
  return (
    <div>
      <div className="review-form">
        <div className="form-control score-container">
          <label className="radio-container">
            <input
              type="radio"
              value="unstatisfied"
              name="review"
              required
              checked={data.review === "unstatisfied"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiFrownFill className="icon" />
            <p>Insatisfeito</p>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="neutral"
              name="review"
              required
              checked={data.review === "neutral"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiNeutralFill className="icon" />
            <p>Poderia ser melhor</p>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="statisfied"
              name="review"
              required
              checked={data.review === "statisfied"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiSmileFill className="icon" />
            <p>satisfeito</p>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="very_statisfied"
              name="review"
              required
              checked={data.review === "very_statisfied"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiHeartEyesFill className="icon" />
            <p>Muito satisfeito</p>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment"> Comentario:</label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Conte como foi a sua experiencia com o nosso produto..."
            required
            value={data.comment || ""}
            onChange={(e) => updateFieldHandler("comment", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PreviewForm;
