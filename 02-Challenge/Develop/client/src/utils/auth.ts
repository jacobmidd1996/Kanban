import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  // Decodes the token to get the user profile
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // Checks if the user is logged in by verifying if a valid token exists
  loggedIn() {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  // Checks if the token is expired by comparing the expiration time to the current time
  isTokenExpired(token: string) {
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded || !decoded.exp) return true;
    return decoded.exp * 1000 < Date.now();
  }

  // Retrieves the token from localStorage
  getToken(): string {
    return localStorage.getItem("id_token") || "";
  }

  // Sets the token in localStorage and redirects to the home page
  login(idToken: string) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  // Removes the token from localStorage and redirects to the login page
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
  }
}

export default new AuthService();
