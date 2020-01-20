import styled from "styled-components";
import _ from "lodash";
import React from "react";
const CardContainer = styled.div`
  height: 150px;
  display: flex;
  margin: 15px;
  background-image: linear-gradient(to right, white, #e9f9ff);
`;
const CarImage = styled.img`
  height: 90px;
`;
const DetailsContainer = styled.div`
  display: flex;
`;
export default ({
  engine_type,
  engine_size,
  initial_rental,
  transmission,
  contract_term,
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
      </div>
      <div>
        <h2>£{monthly_rental}/month</h2>
        <p>{initial_rental} initial</p>
        <p>{contract_term}</p>
      </div>
    </DetailsContainer>
  </CardContainer>
);
