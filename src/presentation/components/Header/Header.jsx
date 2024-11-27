import { styled } from "styled-components";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #213547;
  color: #fafafa;
  font-size: 1.5rem;
`;
export default function Header() {
  const [now, setNow] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState("");

 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date("2024-11-29T00:00:00"); 

  useEffect(() => {
    
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
   
    const diff = targetDate - now;

   
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    
    if (diff > 0) {
      setTimeRemaining(`${days} days ${hours} hours ${minutes} minutes`);
    } else {
      setTimeRemaining("Countdown ended");
    }
  }, [now, targetDate]);

  return (
    <HeaderWrapper>
      <div>
        <h3>Black Friday</h3>
      </div>
      <div>Until it finishes: {timeRemaining}</div>
    </HeaderWrapper>
  );
}
