import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";
import MyAlbums from "./Components/MyAlbums";
import MyPlaylist from "./Components/MyPlaylist";

class App extends Component {
  render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <HomePage/>
          </div>
        </Route>

        <Route exact path="/albums">
          <MyAlbums/>
        </Route>

        <Route exact path="/playlists">
          <MyPlaylist/>
        </Route>

      </Switch>
    </BrowserRouter>
  }
}

export default App;
