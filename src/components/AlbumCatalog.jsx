
import "./AlbumCatalog.css";

const AlbumCatalog = ({albums}) => {
    
    return <section>

        {albums && albums.length > 0 &&
            albums
                .map(a => a.images[0].url)
                .map((url, i) => <img key={i} src={url} />)
        }

    </section>;
}

export default AlbumCatalog;