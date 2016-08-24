import React, { Component } from 'react';
import FadeProps from './fade-props';

class App extends Component {
  state = {
    components: [
      <div key="one">One</div>,
      <div key="two">Two</div>
    ],
    toggle: false
  };

  toggleComponent = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  componentDidMount() {
    setInterval(this.toggleComponent, 2000);
  }

  render() {
    const { components, toggle } = this.state;

    return (
      <div className="App">
        <FadeProps>
          { components[+toggle] }
        </FadeProps>
      </div>
    );
  }
}

export default App;
