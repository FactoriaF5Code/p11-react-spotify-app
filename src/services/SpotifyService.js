import TokenStore from "./TokenStore";

class SpotifyService {
    async getNewAlbumReleases() {
        let store = new TokenStore()

        if (!store.tokenExists()) {
            await this.refreshToken(store);
        }

        let url = "https://api.spotify.com/v1/browse/new-releases"

        return await this.get(url)
            .then(response => response.json())

    }

    async searchAlbums(query) {
        let url = `https://api.spotify.com/v1/search?q=${query}&type=album`

        return await this.get(url)
            .then(response => response.json())
    }

    async refreshToken(store) {
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

        const url = 'https://accounts.spotify.com/api/token';

        let parameters = new URLSearchParams();
        parameters.set("grant_type", "client_credentials");
        parameters.set("client_id", clientId);
        parameters.set("client_secret", clientSecret);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: parameters
        };

        await fetch(url, options)
            .then(response => response.json())
            .then(data => store.setToken(data.access_token));
    }

    get(url) {
        const store = new TokenStore()
        let token = store.getToken()

        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        return fetch(url, options)
    }
};



export default SpotifyService;

