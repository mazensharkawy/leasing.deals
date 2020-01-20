import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Server from "./server";
import _ from "lodash";
import LeaseCard from "./components/LeaseCard";
class App extends React.Component {
  state = {};
  async componentDidMount() {
    const leaseData = await Server.getLeasesData();
    this.setState({ leaseData: leaseData ? leaseData.deals : null });
  }
  render() {
    const { leaseData } = this.state;
    console.log({ leaseData });
    return <div>{_.map(_.take(leaseData, 20), lease => LeaseCard(lease))}</div>;
  }
}

export default App;
