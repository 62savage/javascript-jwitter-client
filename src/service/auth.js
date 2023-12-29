export default class AuthService {
  async login(username, password) {
    return {
      username: "hyunj__si",
      token: "abc1234",
    };
  }

  async me() {
    return {
      username: "hyunj__si",
      token: "abc1234",
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: "hyunj__si",
      token: "abc1234",
    };
  }
}
