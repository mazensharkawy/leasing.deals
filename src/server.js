const SERVER_URL = "https://leasing.deals/get-all-deals";
export default class Server {
  static async getLeasesData() {
    try {
      const leasesData = await this.send({
        url: SERVER_URL,
        data: {
          type: "personal",
          modelID: "x2 xdrive18 suv",
          page: "1"
        }
      });
      return leasesData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
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
