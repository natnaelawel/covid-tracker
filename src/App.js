import React from "react";

import styles from "./App.module.css";
import "leaflet/dist/leaflet.css";
import { Appbar, Main, Footer } from "./components";
import { createMuiTheme } from "@material-ui/core";

class App extends React.Component {
  state = {};
  async componentDidMount() {
    const colortheme = createMuiTheme({
      palette: {
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
      },
    });
  }

  render() {
    return (
      <div>
        <Appbar />
        <div className={styles.container}>
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
