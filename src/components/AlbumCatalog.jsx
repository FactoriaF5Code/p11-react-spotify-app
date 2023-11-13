import { useEffect, useState } from "react";
import SpotifyService from "../services/SpotifyService";
import "./AlbumCatalog.css";

const AlbumCatalog = () => {
    const spotify = new SpotifyService();

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        spotify.getNewAlbumReleases()
            .then(response => setAlbums(response.albums.items))
    }, []);


    return <section>

        {albums && albums.length > 0 &&
            albums
                .map(a => a.images[0].url)
                .map((url, i) => <img key={i} src={url} />)
        }

    </section>;
}

export default AlbumCatalog;