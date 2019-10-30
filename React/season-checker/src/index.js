import React, { Component } from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import Error from "./Error";

class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  renderContent() {
    const { lat, errorMessage } = this.state;

    //사용자가 허용한 경우
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    //사용자가 거부한 경우
    if (errorMessage && !lat) {
      return <Error />;
    }

    //사용자의 결정을 기다리는중
    return <Spinner message="where are you ?" />;
  }

  componentDidMount() {
    //컴포넌트가 렌더링 된후에 실행되는 메소드
    window.navigator.geolocation.getCurrentPosition(
      postion => {
        this.setState({ lat: postion.coords.latitude });
        console.log(postion);
      },
      error => {
        this.setState({ errorMessage: error.message });
        console.log(error);
      }
    );
  }
  render() {
    return <> {this.renderContent()} </>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
