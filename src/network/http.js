export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error(err.message);
    }
    // If the body is optional, invoke the respective method

    if (response.status > 299 || response.status < 200) {
      const message =
        data && data.message ? data.message : "Something went wrong! ";
      throw new Error(message);
    }

    return data;
  }
}
