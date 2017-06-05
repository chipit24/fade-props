import React, { Component } from 'react';
import FadeProps from './fade-props';

class App extends Component {
  state = {
    selected: 0,
    components: [
      <div key="one">One</div>,
      <div key="two">Two</div>,
      <div key="three">Three</div>
    ]
  };
  
  selectComponent(selected) {
    this.setState({ selected });
  }
  
  render() {
    const { components, selected } = this.state;
    
    return (
      <div className="App">
        <FadeProps animationLength={2000}>
          { components[selected] }
        </FadeProps>
        
        <button onClick={this.selectComponent.bind(this, 0)}>
          Load One
        </button>
        
        <button onClick={this.selectComponent.bind(this, 1)}>
          Load Two
        </button>
        
        <button onClick={this.selectComponent.bind(this, 2)}>
          Load Three
        </button>
        
        <button onClick={this.selectComponent.bind(this)}>
          Unload
        </button>
      </div>
    );
  }
}

export default App;
