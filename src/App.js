import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Server from "./server";

const SERVER_URL = "https://leasing.deals/get-all-deals";
class App extends React.Component {
  state = {};
  async componentDidMount() {
    try {
      const leasesData = await Server.send({
        url: SERVER_URL,
        data: {
          type: "personal",
          modelID: "x2 xdrive18 suv",
          page: "1"
        }
      });
      console.log({ leasesData });
      this.setState({ leasesData });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { leasesData } = this.state;
    return <p>{JSON.stringify(leasesData)}</p>;
  }
}

export default App;
