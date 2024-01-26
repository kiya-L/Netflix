import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';

const Rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} />

      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movie" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchURL={requests.fetchComedyMovies} />

      <Row title="Horror Movie" fetchURL={requests.fetchHorrorMovies} />

      <Row title="Romance Movie" fetchURL={requests.fetchRomanceMovies} />

      <Row title="TV Show" fetchURL={requests.fetchTvShow} />

      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </>
  );
}

export default Rowlist
