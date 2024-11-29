import Card from "../Card/Card.jsx"; // Import Card component
import { data } from "../../infrastructure/data.js";
import { CardWrapper, BiggerCardWrapper } from "../Card/StyledCard.jsx"; // Corrected import
import "./CardSection.css";

export function CardSection() {
  return (
    <section>
      <h3>Выберите план</h3>
      <div className="cardList">
        {data.map((card) => {
          const Wrapper = card.isBiggerCard ? BiggerCardWrapper : CardWrapper;
          return (
            <Wrapper key={card.id} {...card}>
              <Card {...card} />
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
