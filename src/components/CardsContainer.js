import styled from "styled-components";
import _ from "lodash";
import React, { Component } from "react";
import { Button } from "evergreen-ui";
import LeaseCard from "./LeaseCard";
import Filters from "./Filters";
const CARDS_PER_PAGE = 20;
class CardsContainer extends Component {
  state = {
    currentPage: 0,
    filteredLeases: this.props.leases
  };
  renderPagesButton = () => {
    const { filteredLeases } = this.state;
    if (!filteredLeases) return;
    let numberOfPages = Math.ceil(filteredLeases.length / CARDS_PER_PAGE);
    let output = [];
    if (numberOfPages <= 1) return [];
    for (let i = 0; i < numberOfPages; i++) {
      output.push(
        <Button
          key={"pageButton " + i}
          onClick={() => this.setState({ currentPage: i })}
        >
          {i + 1}
        </Button>
      );
    }
    return output;
  };
  componentDidUpdate(prevProps) {
    if (this.props.leases !== prevProps.leases)
      this.setState({ filteredLeases: this.props.leases });
  }
  setFiltered = filteredLeases => this.setState({ filteredLeases });
  render() {
    const { leases } = this.props;
    const { filteredLeases } = this.state;
    const { currentPage } = this.state;
    const pageStartIndex = currentPage * CARDS_PER_PAGE;
    const pageEndIndex = pageStartIndex + 20;
    return (
      <div>
        <Filters leases={leases} setFiltered={this.setFiltered} />
        <div>
          {_.map(_.slice(filteredLeases, pageStartIndex, pageEndIndex), lease =>
            LeaseCard(lease)
          )}
        </div>
        <div>{this.renderPagesButton()}</div>
      </div>
    );
  }
}

export default CardsContainer;
