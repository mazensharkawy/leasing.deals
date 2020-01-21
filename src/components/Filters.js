import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";
const HeaderContainer = styled.div`
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  background: #f5f5f5;
`;
const Select = styled.select`
  background: white;
  min-width: 150px;
  height: 30px;
`;
const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;
class Filters extends Component {
  state = {};
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.filter);
  };
  filter = () => {
    const { higherRange, lowerRange, engine_type, transmission } = this.state;
    const { leases } = this.props;
    const filteredLeases = _.filter(
      leases,
      lease =>
        (!higherRange || higherRange >= lease.monthly_rental) &&
        (!lowerRange || lowerRange <= lease.monthly_rental) &&
        (!engine_type || engine_type === lease.engine_type) &&
        (!transmission || transmission === lease.transmission)
    );
    this.props.setFiltered(filteredLeases);
  };
  render() {
    const { higherRange, lowerRange, engine_type, transmission } = this.state;
    return (
      <HeaderContainer>
        <Select
          name="transmission"
          value={transmission}
          onChange={this.handleChange}
        >
          <option value="">All transmissions</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </Select>
        <Select
          name="engine_type"
          value={engine_type}
          onChange={this.handleChange}
        >
          <option value="">All engine types</option>
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
        </Select>
        <div>
          <Input
            value={lowerRange}
            type="number"
            name="lowerRange"
            placeholder="Price from"
            onChange={this.handleChange}
          />
          <Input
            value={higherRange}
            type="number"
            placeholder="Price to"
            name="higherRange"
            onChange={this.handleChange}
          />
        </div>
      </HeaderContainer>
    );
  }
}

export default Filters;
