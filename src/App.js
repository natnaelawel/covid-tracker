import React  from 'react'

import styles from './App.module.css';
import "leaflet/dist/leaflet.css";
import {Appbar, Main, Footer} from './components';

class App extends React.Component {
  state = {
  };
  async componentDidMount() {
  }

  render() {
    return (
      <div>
        <Appbar />
        <div className={styles.container}>
          <Main
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;