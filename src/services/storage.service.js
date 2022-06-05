const TOKEN_KEY = "token";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    return localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
  },
};

export default TokenService;
