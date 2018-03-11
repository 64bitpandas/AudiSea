import React, { Component } from "react"
import { Route } from "react-router-dom"
import Index from "./views/Index"
import "./css/App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet"/>
        <Route exact path="/" component={Index}/>
      </div>
    )
  }
}

export default App