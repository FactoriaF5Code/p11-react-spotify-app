### React Spotify App



### Get Token

```
async getToken() {

    const CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_API_CLIENT_SECRET;

    const URL = 'https://accounts.spotify.com/api/token';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    try {
        const request = await fetch(URL, options);
        const response = await request.json();

        if (request.ok) {
          this.localStorage.setItem('access_token', response.access_token);
        }
    } catch (error) {
        console.log(error);
    }
  }
```

### Fetch data 

```
async fetchData(){
    
    this.getToken();

    const token = this.localStorage.getItem('access_token');

    try{
      let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.localStorage.getItem('access_token')
        }
      }

      if(token){
        console.log("hay token cuando se hace el fetch");
      } else{
        console.log('no hay token');
      }

      const request = await fetch(`${this.baseUrl}/${this.path}`, options);

      if(!request.ok){
        console.log('Error desde la request');
        return;
      }

      const response = await request.json();
      return response;

    } catch(error){
      throw new Error('Error al obtener dados de la API de Spotify: ' + error);
    }
  }

}
```