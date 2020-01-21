import styled from "styled-components";
import _ from "lodash";
import React from "react";
const CardContainer = styled.div`
  height: 150px;
  max-width: 700px;
  margin: 15px auto;
  display: flex;
  border-radius: 5px;
  background-image: linear-gradient(to right, white, #e9f9ff);
`;
const CarImage = styled.img`
  height: 90px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex: 9;
  padding: 10px;
  justify-content: space-between;
`;
export default ({
  engine_type,
  initial_rental,
  contract_type,
  months,
  name,
  model,
  image_url,
  derivative,
  monthly_rental
}) => (
  <CardContainer>
    <CarImage src={image_url} />
    <DetailsContainer>
      <div>
        <h2>
          {name} {model}
        </h2>
        <p>{derivative}</p>
        <p>{engine_type}</p>
      </div>
      <div>
        <h2>£{monthly_rental}/month</h2>
        <p>{initial_rental} initial</p>
        <p>{contract_type}</p>
      </div>
    </DetailsContainer>
  </CardContainer>
);
