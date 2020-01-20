export default class Server {
  static async send({ url, data }) {
    console.log({ url, data });
    let payload = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
      //   credentials: 'same-origin'
    };
    return fetch(url, payload)
      .then(this.checkAndThrowError)
      .then(this.parseJson);
  }
  static async get(url) {
    let payload = {
      // mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      //   credentials: 'same-origin'
    };
    return fetch(url, payload)
      .then(this.checkAndThrowError)
      .then(this.parseJson);
  }
  static checkError(response) {
    if (response.status >= 200 && response.status < 300) return response;
  }
  static checkAndThrowError(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300) return response;
    else throw "NOT VALID TOKEN";
  }
  static parseJson(p) {
    if (!p) return {};
    return p.json();
  }
}
