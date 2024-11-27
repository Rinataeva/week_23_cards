import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 150px;
    height: 220px;
    padding: 10px;
  }
  @media (max-width: 480px) {
    width: 120px;
    height: 180px;
    font-size: 14px;
  }
`;

export const BiggerCardWrapper = styled(CardWrapper)`
  width: 210px;
  height: 310px;
  background-color: ${(props) => props.color};
  transform: scale(1.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
`;
