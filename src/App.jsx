import { useState, useEffect } from 'react';
import Header from './components/Header';
import AlbumCatalog from './components/AlbumCatalog';
import SpotifyService from './services/SpotifyService';
import './App.css';


function App() {

  const spotify = new SpotifyService();

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    spotify.getNewAlbumReleases()
      .then(response => setAlbums(response.albums.items))
  }, []);

  const updateAlbums = (text) => {
    spotify.searchAlbums(text)
      .then(response => setAlbums(response.albums.items))
  }


  return (
    <>
      <Header onSearch={updateAlbums} />
      <AlbumCatalog albums={albums} />
    </>
  )
}

export default App
