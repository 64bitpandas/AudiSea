import React, { Component } from "react"

class App extends Component {
  render() {
    return (
      <div className="App">
        <a-scene>
          <a-assets>
              <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg"/>
          </a-assets>
          
          <a-box position="0 2 -5" rotation="0 45 45" scale="2 2 2" src="#boxTexture">
              <a-animation attribute="position" direction="alternate" dur="2000" repeat="indefinite"
            to="0 2.2 -5"></a-animation>
              <a-animation attribute="rotation" begin="click" dur="2000" to="360 405 45"></a-animation>
              <a-animation attribute="scale" begin="mouseenter" dur="300" to="2.3 2.3 2.3"></a-animation>
              <a-animation attribute="scale" begin="mouseleave" dur="300" to="2 2 2"></a-animation>
          </a-box>

          <a-text value="This is example text" color="red" position="-1.5 0.7 -3" scale="1.5 1.5 1.5"></a-text>

          <a-ocean width="50" depth="50" density="40"></a-ocean>
        
          <a-camera position="0 0 0">
              <a-cursor color="red"></a-cursor>
          </a-camera>
        </a-scene>
      </div>
    )
  }
}

export default App