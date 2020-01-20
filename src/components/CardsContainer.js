import styled from "styled-components";
import _ from "lodash";
import React, { Component } from "react";
import { Button } from "evergreen-ui";
import LeaseCard from "./LeaseCard";
const CARDS_PER_PAGE = 20;
class CardsContainer extends Component {
  state = {
    currentPage: 0
  };
  renderPagesButton = () => {
    const { leases } = this.props;
    if (!leases) return;
    let numberOfPages = Math.ceil(leases.length / CARDS_PER_PAGE);
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
  render() {
    const { leases } = this.props;
    const { currentPage } = this.state;
    const pageStartIndex = currentPage * CARDS_PER_PAGE;
    const pageEndIndex = pageStartIndex + 20;
    return (
      <div>
        <div>
          {_.map(_.slice(leases, pageStartIndex, pageEndIndex), lease =>
            LeaseCard(lease)
          )}
        </div>
        ;<div>{this.renderPagesButton()}</div>
      </div>
    );
  }
}

export default CardsContainer;
