const TOKEN_NAME = "token";

class TokenStore {
    tokenExists() {
        return localStorage.getItem(TOKEN_NAME) !== null;
    }

    getToken(){
        return localStorage.getItem(TOKEN_NAME);
    }

    setToken(token){
        localStorage.setItem(TOKEN_NAME, token);
    }
};


export default TokenStore;