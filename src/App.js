import React, { Component } from "react"
import { Route } from "react-router-dom"
import Index from "./views/Index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Index}/>
      </div>
    )
  }
}

export default App