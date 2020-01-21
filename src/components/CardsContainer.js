import styled from "styled-components";
import _ from "lodash";
import React, { Component } from "react";
import { Button } from "evergreen-ui";
import LeaseCard from "./LeaseCard";
import Filters from "./Filters";
const CARDS_PER_PAGE = 20;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;
class CardsContainer extends Component {
  state = {
    currentPage: 0,
    filteredLeases: this.props.leases
  };
  renderPagesButton = () => {
    const { filteredLeases, currentPage } = this.state;
    if (!filteredLeases) return;
    let numberOfPages = Math.ceil(filteredLeases.length / CARDS_PER_PAGE);
    let output = [];
    if (numberOfPages <= 1) return [];
    const lowestPageWindow = Math.floor(currentPage / 5) * 5;
    const highestPageWindow = Math.floor(currentPage / 5) * 5 + 5;
    output.push(
      <Button
        key={"pageButton >"}
        disabled={currentPage < 5}
        onClick={() => this.setState({ currentPage: currentPage - 5 })}
      >
        {"<"}
      </Button>
    );
    for (let i = lowestPageWindow; i < highestPageWindow; i++) {
      output.push(
        <Button
          key={"pageButton " + i}
          appearance={currentPage === i && "primary"}
          onClick={() => this.setState({ currentPage: i })}
        >
          {i + 1}
        </Button>
      );
    }
    output.push(
      <Button
        key={"pageButton >"}
        disabled={currentPage > numberOfPages - 5}
        onClick={() => this.setState({ currentPage: currentPage + 5 })}
      >
        {">"}
      </Button>
    );
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
        <Pagination>
          <div>{this.renderPagesButton()}</div>
        </Pagination>
      </div>
    );
  }
}

export default CardsContainer;
