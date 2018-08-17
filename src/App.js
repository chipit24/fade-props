import React, { Component } from 'react';
import FadeProps from './fade-props';

class App extends Component {
  state = {
    selected: 0,
    components: [
      <div key="one">One</div>,
      <div key="two">Two</div>,
      <div key="three">Three</div>
    ],
    animationLength: 2000
  };
  
  selectComponent(selected) {
    this.setState({ selected });
  }

  handleAnimationLengthChange(event) {
    this.setState({ animationLength: event.target.value });
  }
  
  render() {
    const { components, selected, animationLength } = this.state;
    
    return (
      <div className="App">
        <FadeProps animationLength={animationLength}>
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

        <div style={{ marginTop: 20 }}>
          <label htmlFor="animation-length" style={{ marginRight: 10 }}>Animation Length</label>
          <input
            id="animation-length"
            type="integer"
            value={this.state.animationLength}
            onChange={this.handleAnimationLengthChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
