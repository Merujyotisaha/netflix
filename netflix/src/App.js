import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Banner />
     
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} isLargeRow />
      <Row title="New Release" fetchUrl={requests.fetchNewrelease} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Science Fiction by Tom Cruise" fetchUrl={requests.fetchSciencefiction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
    </div>
  );
}

export default App;
