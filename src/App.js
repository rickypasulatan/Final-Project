import React, {useState, useEffect} from 'react';
import HomePage from './components/HomePage.js'
import {BrowserRouter as Router, Switch, useParams, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import TvDetail from './components/TvDetail.js'
import AboutPage from './components/AboutPage.js';

function App() {
  const [apiData, setApiData] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    fetch("http://api.tvmaze.com/shows")
      .then(resp => resp.json())
      .then(data => {
        setApiData(data)
        setIsLoading(false)
      })
  }, [])

  if(isLoading) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    )
  } else {
    return (
      <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage apiData={apiData}/>
            </Route>
            <Route exact path="/TvDetail/:id" children={
              <TvDetail apiData={apiData}/>
            }/>
            <Route exact path="/about">
              <AboutPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
