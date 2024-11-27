/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../presentation/components/Button/Button";
import "./Card.css";
import Price from "./Price.jsx";

// Corrected styled component syntax

export default function Card(props) {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  const { title, price, speed, description, color } = props;

  return (
    <div className="card" color={color}>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-price">
          <Price price={price} />
        </div>
        <div className="card-speed">{speed}</div>
        <div className="card-description">{description}</div>

        <Button
          isActive={Boolean(contentType)} // Corrected boolean check
          onClick={() => handleClick("Отличный выбор! " + title + " ")}
        >
          <span className="card-button">Выбрать</span>
        </Button>
      </div>
      <p>{contentType}</p>
    </div>
  );
}
