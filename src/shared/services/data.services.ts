import axios from "axios";
import * as request from "request";

class DataService {

    constructor() {
    }

    async get(url: any) {
       // let URL = this.baseUrl + url + "&appid=" + this.apiKey;
        console.log("URL:---->", url);
        console.log("-------------------------------------doRequest");
        return new Promise((resolve, reject) => {
          request(url, (error, res, body) => {
            console.log("-------------------------------------doRequest - call ");
            if (!error && res.statusCode === 200) {
              console.log(
                "-------------------------------------doRequest - resolve"
              );
              resolve(body);
            } else {
              console.log(
                "-------------------------------------doRequest - reject"
              );
              reject(error);
            }
          });
        });

    }
}

export default new DataService();